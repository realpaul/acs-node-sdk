// Modules import
var acsCollection = require('./collection');
var acsRest = require('./rest');

// Const definition
var DEFAULT_API_ENTRY_POINT = 'api.cloud.appcelerator.com';
var CLASS_LEVEL = 0;
var INSTANCE_LEVEL = 1;
var DEFAULT_APP_OPTIONS = {
    apiEntryPoint: DEFAULT_API_ENTRY_POINT
};
var HTTP_METHOD_LIST = ['get', 'post', 'update', 'delete'];
var DOC_BASE_URL = 'http://docs.appcelerator.com/cloud/latest/#!/api/';


// Global functions
var getACSCollection = function() {
    return acsCollection;
}
module.exports.getACSCollection = getACSCollection;

function executeACS(acsObjectName, acsObjectMethodName, acsObject, acsMethod, httpMethod, level, appDefaultKey, appDefaultOptions) {
    var requiredParam = acsCollection[acsObjectName].methods[acsObjectMethodName].requiredParam;
    var optionalParam = acsCollection[acsObjectName].methods[acsObjectMethodName].optionalParam;
    if (level === CLASS_LEVEL) {
        return function(appKey, appOptions, restOptions, callback) {
            // Prameter offset
            if (typeof appOptions == 'function') {
                // No appOptions and restOptions
                callback = appOptions;
                appOptions = null;
                restOptions = null;
            } else if (typeof appOptions == 'object' && typeof restOptions == 'function') {
                // No appOptions
                callback = restOptions;
                restOptions = appOptions;
                appOptions = null;
            }
            // Check required parameter
            if (!appKey) {
                throw new Error('Required parameter \'appKey\' is missing');
            } else if (typeof appKey != 'string') {
                throw new Error('Wrong type of ACS app key');
            }
            // Supplement default parameter if missing
            if (!appOptions) {
                appOptions = DEFAULT_APP_OPTIONS;
            } else if (!appOptions.apiEntryPoint) {
                appOptions.apiEntryPoint = DEFAULT_API_ENTRY_POINT;
            }
            acsRest.methodCall(acsObject, acsMethod, httpMethod, appKey, appOptions, requiredParam, optionalParam, restOptions, callback);
        }
    } else if (level === INSTANCE_LEVEL) {
        return function(restOptions, callback) {
            // Prameter offset
            if (typeof restOptions == 'function') {
                // No restOptions
                callback = restOptions;
                restOptions = null;
            }
            acsRest.methodCall(acsObject, acsMethod, httpMethod, appDefaultKey, appDefaultOptions, requiredParam, optionalParam, restOptions, callback);
        }
    }
}

function executeACSRest(httpMethod, level, appDefaultKey, appDefaultOptions) {
    if (level === CLASS_LEVEL) {
        return function(appKey, appOptions, methodPath, restOptions, callback) {
            // Prameter offset
            if (typeof appOptions == 'string' && typeof methodPath == 'function') {
                // No appOptions and restOptions
                callback = methodPath;
                methodPath = appOptions;
                appOptions = null;
                restOptions = null;
            } else if (typeof appOptions == 'string' && typeof methodPath == 'object' && typeof restOptions == 'function') {
                // No appOptions
                callback = restOptions;
                restOptions = methodPath;
                methodPath = appOptions;
                appOptions = null;
            }
            // Check required parameter
            if (!appKey) {
                throw new Error('Required parameter \'appKey\' is missing');
            } else if (typeof appKey != 'string') {
                throw new Error('Wrong type of ACS app key');
            } else if (!methodPath) {
                throw new Error('Required parameter \'methodPath\' is missing');
            } else if (typeof methodPath != 'string') {
                throw new Error('Wrong type of method path');
            }
            // Supplement default parameter if missing
            if (!appOptions) {
                appOptions = DEFAULT_APP_OPTIONS;
            } else if (!appOptions.apiEntryPoint) {
                appOptions.apiEntryPoint = DEFAULT_API_ENTRY_POINT;
            }
            acsRest.restCall(methodPath, httpMethod, appKey, appOptions, restOptions, callback);
        }
    } else if (level === INSTANCE_LEVEL) {
        return function(methodPath, restOptions, callback) {
            // Prameter offset
            if (typeof restOptions == 'function') {
                // No restOptions
                callback = restOptions;
                restOptions = null;
            }
            // Check required parameter
            if (!methodPath) {
                throw new Error('Required parameter \'methodPath\' is missing');
            } else if (typeof methodPath != 'string') {
                throw new Error('Wrong type of method path');
            }
            acsRest.restCall(methodPath, httpMethod, appDefaultKey, appDefaultOptions, restOptions, callback);
        }
    }
}


// Global settings
for (var i = 0; i < acsCollection.objectList.length; i++) {
    var acsObjectKey = acsCollection.objectList[i];
    module.exports[acsObjectKey] = {};
    var acsObject = acsCollection[acsObjectKey];
    var restObject = acsObjectKey.toLowerCase();
    // Add doc url
    acsObject.docUrl = DOC_BASE_URL + acsObjectKey;
    for (var j = 0; j < acsObject.methodList.length; j++) {
        var acsObjectMethodKey = acsObject.methodList[j];
        var acsObjectMethod = acsObject.methods[acsObjectMethodKey];
        var httpMethod = acsObjectMethod.httpMethod;
        var restMethod = acsObjectMethod.restMethod ? acsObjectMethod.restMethod : acsObjectMethodKey;
        module.exports[acsObjectKey][acsObjectMethodKey] = executeACS(acsObjectKey, acsObjectMethodKey, restObject, restMethod, httpMethod, CLASS_LEVEL);
        // Add doc url
        acsObjectMethod.docUrl = acsObject.docUrl + '-method-' + restMethod;
    }
}
for (var i = 0; i < HTTP_METHOD_LIST.length; i++) {
    var httpMethod = HTTP_METHOD_LIST[i];
    module.exports[httpMethod] = executeACSRest(httpMethod, CLASS_LEVEL);
}


// arg1: ACS app key (required)
// arg2: ACS app options (optional)
var ACSApp = function(arg1, arg2) {
    if (!arg1) {
        throw new Error('Required parameter is missing');
    } else if (typeof arg1 != 'string') {
        throw new Error('Wrong type of ACS app key');
    } else {
        this.appKey = arg1;
    }
    if (!arg2) {
        this.appOptions = DEFAULT_APP_OPTIONS;
    } else if (typeof arg2 != 'object') {
        throw new Error('Wrong type of ACS app options');
    } else if (!arg2.apiEntryPoint) {
        this.appOptions = arg2;
        this.appOptions.apiEntryPoint = DEFAULT_API_ENTRY_POINT;
    } else {
        this.appOptions = arg2;
    }
    for (var i = 0; i < acsCollection.objectList.length; i++) {
        var acsObjectKey = acsCollection.objectList[i];
        this[acsObjectKey] = {};
        var acsObject = acsCollection[acsObjectKey];
        var restObject = acsObjectKey.toLowerCase();
        for (var j = 0; j < acsObject.methodList.length; j++) {
            var acsObjectMethodKey = acsObject.methodList[j];
            var acsObjectMethod = acsObject.methods[acsObjectMethodKey];
            var httpMethod = acsObjectMethod.httpMethod;
            var restMethod = acsObjectMethod.restMethod ? acsObjectMethod.restMethod : acsObjectMethodKey;
            this[acsObjectKey][acsObjectMethodKey] = executeACS(acsObjectKey, acsObjectMethodKey, restObject, restMethod, httpMethod, INSTANCE_LEVEL, this.appKey, this.appOptions);
        }
    }
    for (var i = 0; i < HTTP_METHOD_LIST.length; i++) {
        var httpMethod = HTTP_METHOD_LIST[i];
        this[httpMethod] = executeACSRest(httpMethod, INSTANCE_LEVEL, this.appKey, this.appOptions);
    }
};
ACSApp.prototype.getACSCollection = getACSCollection;
module.exports.ACSApp = ACSApp;


exports = module.exports;
