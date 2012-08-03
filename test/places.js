var acs = require('../lib/acs');

//var sdk = acs.createCocoafish('<app key>');
var sdk = acs.createCocoafish('<oauth key>', '<oauth secret>');

sdk.sendRequest('places/query.json', 'GET', {page:1, per_page:2}, function(data){
	console.log(JSON.stringify(data, null, 2));
}, false);
