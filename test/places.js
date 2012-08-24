var acs = require('../lib/acs');

//var sdk = acs.createCocoafish('rZZcoS8RXZShkUuViQfuNCsrsRMXtkNh');
var sdk = acs.createCocoafish('TCuN3QSdClneWI8yfwyG7OXUJUqYKBuN', '1DkIviTSOleQ7exlDUsGssc8e0iJHvw8');
//var sdk = acs.createCocoafish('lB9zJeLxn7WYWYiHvV1qmy8VuIXZtk3W', 'JxDZKo95MMYSHTModMWpqF8e6DFbjXu5', 'localhost:3000');

sdk.sendRequest('places/query.json', 'GET', {page:1, per_page:2}, function(data){
	console.log(JSON.stringify(data, null, 2));
}, true);
