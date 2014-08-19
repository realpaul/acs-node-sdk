var request = require('request');

var acsCollection = require('./collection');
var apiEntryPoint = 'api.cloud.appcelerator.com';

var getACSCollection = function() {
    return acsCollection;
}

// arg1: ACS app key (required)
// arg2: ACS entry point (optional)
var ACSApp = function(arg1, arg2) {
    if (!arg1) {
        throw new Error('Required parameter is missing');
    } else if (typeof arg1 != 'string') {
        throw new Error('Wrong ACS app key');
    } else {
        this.appKey = arg1;
    }
    if (!arg2) {
        this.apiEntryPoint = apiEntryPoint;
    } else if (typeof arg2 != 'string') {
        throw new Error('Wrong ACS API entry point');
    } else {
        this.apiEntryPoint = arg2;
    }
};

ACSApp.prototype.getACSCollection = getACSCollection;

module.exports.ACSApp = ACSApp;
module.exports.getACSCollection = getACSCollection;
module.exports.actions = {};

function executeACS(acsObject, acsMethod) {
    return function() {
        console.log('%s %s', acsObject, acsMethod);
    }
}

var actions = {};
for (var i = 0; i < acsCollection.objectList.length; i++) {
    var acsObjectKey = acsCollection.objectList[i];
    var acsObject = acsCollection[acsObjectKey];
    for (var j = 0; j < acsObject.methodList.length; j++) {
        var acsObjectMethod = acsObject.methodList[j];
        var functionName = acsObjectKey.toLowerCase() + acsObjectMethod.charAt(0).toUpperCase() + acsObjectMethod.slice(1).toLowerCase();
        actions[functionName] = executeACS(acsObjectKey.toLowerCase(), acsObjectMethod.toLowerCase());
    }
}
module.exports.actions = actions;
console.log(module.exports);

exports = module.exports;
