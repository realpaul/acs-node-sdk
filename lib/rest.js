var request = require('request');

var acsRequest = function(acsObject, acsMethod, httpMethod, appKey, appOptions, requiredParam, optionalParam, restOptions, callback) {
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
    for (var i = 0; i < requiredParam.length; i++) {
        var param = requiredParam[i];
        if (!restOptions[param.key]) {
            callback(new Error('Missing required parameter ' + param.key));
            return;
        } else if (typeof restOptions[param.key] != param.type) {
            callback(new Error('Parameter type of ' + param.key + ' is wrong. Required: ' + param.type + ', actual: ' + typeof restOptions[param.key] + '.'));
            return;
        } else {
            reqBody[param.key] = restOptions[param.key];
        }
    }
    for (var i = 0; i < optionalParam.length; i++) {
        var param = optionalParam[i];
        if (!restOptions[param.key]) {} else if (restOptions[param.key] && typeof restOptions[param.key] != param.type) {
            callback(new Error('Parameter type of ' + param.key + ' is wrong. Required: ' + param.type + ', actual: ' + typeof restOptions[param.key] + '.'));
            return;
        } else {
            reqBody[param.key] = restOptions[param.key];
        }
    }

    var j = request.jar();
    if (restOptions.cookieString) {
        var cookie = request.cookie(restOptions.cookieString);
        j.setCookie(cookie, apiEntryPoint);
    }
    request({
        url: apiEntryPoint,
        method: httpMethod,
        json: reqBody,
        jar: j
    }, function(error, response, body) {
        callback(error, {
            response: response,
            body: body,
            cookieString: j.getCookieString(apiEntryPoint)
        });
    });
}

module.exports.request = acsRequest;
exports = module.exports;
