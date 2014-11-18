var _ = require('lodash'),
	request = require('request'),
	fs = require('fs'),
	u = require('./util'),
	ACSError = require('./acsError'),
	messages = require('./messages');

const fileUploadParams = ['file', 'photo'],
	excludedParameters = ['key', 'pretty_json', 'req', 'res'];

var acsRequest = function(apiEntryPoint, appOptions, httpMethod, restOptions, callback) {
	var reqBody = _.omit(restOptions, excludedParameters);
	var j = request.jar();
	var cookie = null;
	if (restOptions.req) {
		if (restOptions.req.headers && restOptions.req.headers.cookie) {
			cookie = request.cookie(restOptions.req.headers.cookie);
		}
		// Merge req.query and req.body into parameter JSON
		if (restOptions.req.query) {
			reqBody = _.defaults(_.clone(restOptions.req.query), reqBody);
		}
		if (restOptions.req.body) {
			reqBody = _.defaults(_.clone(restOptions.req.body), reqBody);
		}
	}
	if (restOptions.cookieString || appOptions.cookieString) {
		cookie = request.cookie(restOptions.cookieString || appOptions.cookieString);
	}
	if (cookie) {
		j.setCookie(cookie, apiEntryPoint);
	}
	if (appOptions.prettyJson) {
		restOptions.pretty_json = true;
	}
	var requestParam = null;
	var preparedReqBody = {};
	var hasFile = false;
	for (var item in reqBody) {
		var value = reqBody[item];
		if (u.inArray(item, fileUploadParams)) {
			hasFile = true;
			if (u.typeOf(value) === 'string') {
				value = fs.createReadStream(value);
			}
		} else if (u.typeOf(value) === 'object') {
			value = JSON.stringify(value);
		} else {
			value = value.toString();
		}
		preparedReqBody[item] = value;
	}
	if (httpMethod === 'GET') {
		requestParam = {
			url: apiEntryPoint,
			method: httpMethod,
			qs: preparedReqBody,
			jar: j
		};
	} else {
		requestParam = {
			url: apiEntryPoint,
			method: httpMethod,
			jar: j
		};
		if (hasFile) {
			requestParam.formData = preparedReqBody;
		} else {
			requestParam.form = preparedReqBody;
		}
	}
	request(requestParam, function(error, response, body) {
		var result = null;
		var parsedBody = body;
		if (u.typeOf(body) === 'string') {
			try {
				parsedBody = JSON.parse(body);
			} catch (e) {}
		}
		if (restOptions.res) {
			var cookies = j.getCookies(apiEntryPoint);
			restOptions.res.setHeader('Set-Cookie', cookies.join('; '));
			result = {
				response: response,
				body: parsedBody
			};
		} else {
			result = {
				response: response,
				body: parsedBody,
				cookieString: j.getCookieString(apiEntryPoint)
			};
		}
		callback(error, result);
	});
};

var methodCall = function(options, callback) {
	if (!options || !options.acsObject || !options.acsMethod || !options.httpMethod || !options.appKey || !options.appOptions) {
		return (callback ? callback(new ACSError(messages.ERR_MISS_REQUIRED_PARAMETER, {
			parameter: 'in methodCall'
		})) : null);
	}
	if (!options.restOptions) {
		options.restOptions = {};
	}
	var v, item;
	var acsMethod = options.acsMethod;
	if (u.typeOf(options.acsMethod) === 'object') {
		var dynamicMethod = options.acsMethod.entry;
		for (v in options.acsMethod.variables) {
			item = options.acsMethod.variables[v];
			if (!options.restOptions[item]) {
				return (callback ? callback(new ACSError(messages.ERR_MISS_REQUIRED_PARAMETER, {
					parameter: item
				})) : null);
			}
			dynamicMethod = dynamicMethod.replace(item, options.restOptions[item]);
		}
		acsMethod = dynamicMethod;
	}

	var apiEntryPoint = options.appOptions.apiEntryPoint + '/v1/' + options.acsObject + '/' + acsMethod + '.json?key=' + options.appKey;
	// console.log('apiEntryPoint: %s', apiEntryPoint);
	// console.log('acsObject: %s', options.acsObject);
	// console.log('acsMethod: %s', acsMethod);
	// console.log('httpMethod: %s', options.httpMethod);
	// console.log('appKey: %s', options.appKey);
	// console.log('appOptions: %j', options.appOptions);
	// console.log('restOptions: %j', options.restOptions);

	if (u.typeOf(options.acsMethod) === 'object') {
		// Remove unnecessary parameter
		for (v in options.acsMethod.variables) {
			item = options.acsMethod.variables[v];
			if (options.restOptions[item]) {
				delete options.restOptions[item];
			}
		}
	}
	acsRequest(apiEntryPoint, options.appOptions, options.httpMethod, options.restOptions, callback);
};
module.exports.methodCall = methodCall;


var restCall = function(options, callback) {
	if (!options || !options.methodPath || !options.httpMethod || !options.appKey || !options.appOptions) {
		return (callback ? callback(new ACSError(messages.ERR_MISS_REQUIRED_PARAMETER, {
			parameter: 'in restCall'
		})) : null);
	}
	if (!options.restOptions) {
		options.restOptions = {};
	}

	var apiEntryPoint = options.appOptions.apiEntryPoint + options.methodPath + '?key=' + options.appKey;
	// console.log('apiEntryPoint: %s', apiEntryPoint);
	acsRequest(apiEntryPoint, options.appOptions, options.httpMethod, options.restOptions, callback);
};
module.exports.restCall = restCall;
