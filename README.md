acs-node: The sdk of acs for Node.js
==================

ACS SDK for Node.js

You can install it using npm.
    [sudo] npm install acs-node
    
Usage
-----

Example 1, do ACS user login:

- var ACS = require('acs-node');
- function login(req, res) {
-	var un = req.body.username;
-	var pw = req.body.password;
-	ACS.Users.login({login: un, password: pw}, function(data) {
-		if(data.success) {
-			var user = data.users[0];
-			if(user.first_name && user.last_name) {
-				user.name = user.first_name + ' ' + user.last_name;
-			} else {
-				user.name = user.username;
-			}
-			req.session.user = user;
-			res.redirect('/');
-		} else {
-			res.render('login', {message: data.message});
-		}
-	});
- }

Example 2, a generic method show how to operate an ACS user:

- var ACS = require('acs-node');
- var sdk = ACS.initACS('', '');
- var user_id = null;
- var useSecure = true;
- sdk.sendRequest('users/create.json', 'POST', {
-   username:'test1',
-   password:'test1',
-   password_confirmation:'test1',
-   first_name: 'test_firstname',
-   last_name: 'test_lastname'
-   }, function(data){
- 	user_id = data.response.users[0].id;
- 	sdk.sendRequest('users/logout.json', 'DELETE',null, function(data){
- 		sdk.sendRequest('users/login.json', 'POST', {login:'test1', password:'test1'}, function(data){
- 			sdk.sendRequest('users/update.json', 'PUT', {first_name: 'firstname'}, function(data){
- 			}, useSecure);
- 		}, useSecure);
- 	}, useSecure);
- }, useSecure);


More examples, please look up in the folder test.


Legal
------
This code is proprietary and confidential. 
Copyright (c) 2012 by Appcelerator, Inc.
