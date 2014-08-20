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


// Global functions
var getACSCollection = function() {
    return acsCollection;
}
module.exports.getACSCollection = getACSCollection;

function executeACS(acsObject, acsMethod, httpMethod, level, appDefaultKey, appDefaultOptions) {
    if (level === CLASS_LEVEL) {
        return function(appKey, appOptions, restOptions, callback) {
            if (!appKey) {
                throw new Error('Required parameter is missing');
            } else if (typeof appKey != 'string') {
                throw new Error('Wrong type of ACS app key');
            } else if (typeof appOptions == 'function') {
                callback = appOptions;
                appOptions = null;
                restOptions = null;
            } else if (typeof appOptions == 'object' && typeof restOptions == 'function') {
                callback = restOptions;
                restOptions = appOptions;
                appOptions = null;
            }
            if (!appOptions) {
                appOptions = DEFAULT_APP_OPTIONS;
            } else if (!appOptions.apiEntryPoint) {
                appOptions.apiEntryPoint = DEFAULT_API_ENTRY_POINT;
            }
            acsRest.request(acsObject, acsMethod, httpMethod, appKey, appOptions, restOptions, callback);
        }
    } else if (level === INSTANCE_LEVEL) {
        return function(restOptions, callback) {
            if (typeof restOptions == 'function') {
                callback = restOptions;
                restOptions = null;
            }
            acsRest.request(acsObject, acsMethod, httpMethod, appDefaultKey, appDefaultOptions, restOptions, callback);
        }
    }
}


// Global settings
var acsActions = {}; // Class level of actions
for (var i = 0; i < acsCollection.objectList.length; i++) {
    var acsObjectKey = acsCollection.objectList[i];
    var acsObject = acsCollection[acsObjectKey];
    for (var j = 0; j < acsObject.methodList.length; j++) {
        var acsObjectMethodKey = acsObject.methodList[j];
        var acsObjectMethod = acsObject.methods[acsObjectMethodKey];
        var functionName = acsObjectKey.toLowerCase() + acsObjectMethodKey.charAt(0).toUpperCase() + acsObjectMethodKey.slice(1).toLowerCase();
        var httpMethod = acsObjectMethod.httpMethod;
        acsActions[functionName] = executeACS(acsObjectKey.toLowerCase(), acsObjectMethodKey, httpMethod, CLASS_LEVEL);
    }
}
module.exports.actions = acsActions;


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
    var acsAppActions = {}; // Instance level of actions
    for (var i = 0; i < acsCollection.objectList.length; i++) {
        var acsObjectKey = acsCollection.objectList[i];
        var acsObject = acsCollection[acsObjectKey];
        for (var j = 0; j < acsObject.methodList.length; j++) {
            var acsObjectMethodKey = acsObject.methodList[j];
            var acsObjectMethod = acsObject.methods[acsObjectMethodKey];
            var functionName = acsObjectKey.toLowerCase() + acsObjectMethodKey.charAt(0).toUpperCase() + acsObjectMethodKey.slice(1).toLowerCase();
            var httpMethod = acsObjectMethod.httpMethod;
            acsAppActions[functionName] = executeACS(acsObjectKey.toLowerCase(), acsObjectMethodKey, httpMethod, INSTANCE_LEVEL, this.appKey, this.appOptions);
        }
    }
    this.actions = acsAppActions;
};
ACSApp.prototype.getACSCollection = getACSCollection;
module.exports.ACSApp = ACSApp;


exports = module.exports;
