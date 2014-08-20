var request = require('request');

var acsRequest = function(acsObject, acsMethod, httpMethod, appKey, appOptions, restOptions, callback) {

    var prettyJson = ((appOptions && appOptions.prettyJson) || (restOptions && restOptions.prettyJson)) ? '&pretty_json=true' : '';
    var apiEntryPoint = 'https://' + appOptions.apiEntryPoint + '/v1/' + acsObject + '/' + acsMethod + '.json?key=' + appKey + prettyJson;
    // console.log('apiEntryPoint: %s', apiEntryPoint);
    // console.log('acsObject: %s', acsObject);
    // console.log('acsMethod: %s', acsMethod);
    // console.log('httpMethod: %s', httpMethod);
    // console.log('appKey: %s', appKey);
    // console.log('appOptions: %j', appOptions);
    // console.log('restOptions: %j', restOptions);

    var j = request.jar();
    if (restOptions.cookieString) {
        var cookie = request.cookie(restOptions.cookieString);
        j.setCookie(cookie, apiEntryPoint);
    }
    request({
        url: apiEntryPoint,
        method: httpMethod,
        json: restOptions,
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
