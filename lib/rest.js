var _ = require('lodash'),
    request = require('request'),
    ACSError = require('./acs_error'),
    messages = require('./messages');

var acsRequest = function(apiEntryPoint, httpMethod, reqBody, restOptions, callback) {
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
    if (restOptions.cookieString) {
        cookie = request.cookie(restOptions.cookieString);
    }
    if (cookie) {
        j.setCookie(cookie, apiEntryPoint);
    }
    var requestParam = null;
    if (httpMethod == 'GET') {
        requestParam = {
            url: apiEntryPoint,
            method: httpMethod,
            qs: JSON.stringify(reqBody),
            jar: j
        };
    } else {
        requestParam = {
            url: apiEntryPoint,
            method: httpMethod,
            json: reqBody,
            jar: j
        };
    }
    request(requestParam, function(error, response, body) {
        var result = null;
        var parsedBody = body;
        if (httpMethod == 'GET') {
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

var methodCall = function(acsObject, acsMethod, httpMethod, appKey, appOptions, requiredParams, optionalParams, restOptions, callback) {
    if (!restOptions) {
        restOptions = {};
    }
    var prettyJson = ((appOptions && appOptions.prettyJson) || restOptions.prettyJson) ? '&pretty_json=true' : '';
    var apiEntryPoint = 'https://' + appOptions.apiEntryPoint + '/v1/' + acsObject + '/' + acsMethod + '.json?key=' + appKey + prettyJson;
    // console.log('apiEntryPoint: %s', apiEntryPoint);
    // console.log('acsObject: %s', acsObject);
    // console.log('acsMethod: %s', acsMethod);
    // console.log('httpMethod: %s', httpMethod);
    // console.log('appKey: %s', appKey);
    // console.log('appOptions: %j', appOptions);
    // console.log('restOptions: %j', restOptions);

    var reqBody = {};
    for (var i = 0; i < requiredParams.length; i++) {
        var requiredParam = requiredParams[i];
        if (!restOptions[requiredParam.key]) {
            return callback(new ACSError(messages.ERR_MISS_REQUIRED_PARAMETER, {
                parameter: requiredParam
            }));
        } else if (typeof restOptions[requiredParam.key] != requiredParam.type) {
            return callback(new ACSError(messages.ERR_WRONG_PARAMETER_TYPE, {
                type_name: requiredParam.key,
                required_type: requiredParam.type,
                actual_type: typeof restOptions[requiredParam.key]
            }));
        } else {
            reqBody[requiredParam.key] = restOptions[requiredParam.key];
        }
    }
    for (var j = 0; j < optionalParams.length; j++) {
        var optionalParam = optionalParams[j];
        if (restOptions[optionalParam.key]) {
            if (typeof restOptions[optionalParam.key] != optionalParam.type) {
                return callback(new ACSError(messages.ERR_WRONG_PARAMETER_TYPE, {
                    type_name: optionalParam.key,
                    required_type: optionalParam.type,
                    actual_type: typeof restOptions[optionalParam.key]
                }));
            } else {
                reqBody[optionalParam.key] = restOptions[optionalParam.key];
            }
        }
    }
    acsRequest(apiEntryPoint, httpMethod, reqBody, restOptions, callback);
};
module.exports.methodCall = methodCall;


var excludedParameters = ['key', 'pretty_json', 'req', 'res'];
var restCall = function(methodPath, httpMethod, appKey, appOptions, restOptions, callback) {
    if (!restOptions) {
        restOptions = {};
    }
    var prettyJson = ((appOptions && appOptions.prettyJson) || restOptions.prettyJson) ? '&pretty_json=true' : '';
    var apiEntryPoint = 'https://' + appOptions.apiEntryPoint + methodPath + '?key=' + appKey + prettyJson;
    // console.log('apiEntryPoint: %s', apiEntryPoint);

    var reqBody = _.omit(restOptions, excludedParameters);
    acsRequest(apiEntryPoint, httpMethod, reqBody, restOptions, callback);
};
module.exports.restCall = restCall;
