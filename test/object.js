var acs = require('../lib/acs');

var sdk = acs.createCocoafish('rZZcoS8RXZShkUuViQfuNCsrsRMXtkNh');
//var sdk = acs.createCocoafish('IrQvDeTz4al4GKnQ3jKMH7TxlgaDU62m', 'mils89CVuQSfwX7vqIE3Wl5FQWtYKHWK');
//var sdk = acs.createCocoafish('WVDi4XqbXKwCVfkQxWNGTu75x6d8VUrM', 'nCuudIr4EUQnUd0xCFEt8ObRtFYO9aIa', 'localhost:3000');

var login = {
		"login": "test",
		"password": "test"
	};

	var data = {
			"firstName": "Steve",
			"lastname": "Jobs",
			"phone": {
				"work": "123-456-7890",
				"mobile": "098-765-4321",
				"home": "111-222-3333"
			}
		};
		
	console.log("Login");
	sdk.sendRequest('users/login.json', 'POST', login, function(e){
		console.log(e);
		console.log("Sending REST Create");
		sdk.sendRequest('objects/Provider/create.json', 
			'POST',
			{fields: JSON.stringify(data)}, 
			callback);
	});
			


	function callback(data) {
		console.log("Entering sendRequest callback");
		console.log(data);
		if (data) {
			if (data.meta) {
				var meta = data.meta;
				if (meta.status == 'ok' && meta.code == 200 && meta.method_name == 'createObject') {
					console.log("Hell Ya!")
				}
			}
		}
	}