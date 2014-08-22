var request = require('request');
var Cookie = require('tough-cookie').Cookie;

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
    if (restOptions.req) {
        if (restOptions.req.headers && restOptions.req.headers.cookie) {
            var cookieString = restOptions.req.headers.cookie;
            var cookie = request.cookie(cookieString);
            j.setCookie(cookie, apiEntryPoint);
        }
    } else if (restOptions.cookieString) {
        var cookie = request.cookie(restOptions.cookieString);
        j.setCookie(cookie, apiEntryPoint);
    }
    request({
        url: apiEntryPoint,
        method: httpMethod,
        json: reqBody,
        jar: j
    }, function(error, response, body) {
        var result = null;
        if (restOptions.res) {
            var cookies = j.getCookies(apiEntryPoint);
            restOptions.res.setHeader("Set-Cookie", cookies.join('; '));
            result = {
                response: response,
                body: body
            };
        } else {
            result = {
                response: response,
                body: body,
                cookieString: j.getCookieString(apiEntryPoint)
            }
        }
        callback(error, result);
    });
}

module.exports.request = acsRequest;
exports = module.exports;
