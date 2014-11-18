var fs = require('fs'),
	_ = require('lodash');

const DOC_BASE_URL = 'http://docs.appcelerator.com/cloud/latest/#!/api/';

var acsCollection = {};

var collectionFolder = __dirname + '/acsObjects/',
	collectionFiles = fs.readdirSync(collectionFolder);
for (var collectionFileIndex in collectionFiles) {
	var collectionFile = collectionFiles[collectionFileIndex];
	var acsObject = require(collectionFolder + collectionFile);
	_.merge(acsCollection, acsObject);
}
for (var acsObjectKey in acsCollection) {
	var acsObject = acsCollection[acsObjectKey];
	acsObject.docUrl = DOC_BASE_URL + acsObjectKey;
	acsObject.fieldList = acsObject.fields;
	acsObject.methodList = Object.keys(acsObject.methods);
}
acsCollection.objectList = Object.keys(acsCollection);

module.exports = acsCollection;
