# ACS Node SDK [![Build Status](https://travis-ci.org/realpaul/acs-node-sdk.svg)](https://travis-ci.org/realpaul/acs-node-sdk)

The SDK of ACS for NodeJS

## Getting started
```bash
git clone git@github.com:realpaul/acs-node-sdk.git
cd acs-node-sdk
git checkout -b NODEJS-1598_ReworkPoC --track origin/NODEJS-1598_ReworkPoC
npm install
export ACS_APPKEY=ONE_OF_YOUR_ACS_TEST_APPKEY
npm test
```

## Basic Example
You can get an overview of ACS Node SDK example from examples/basic.js
```bash
cd acs-node-sdk/examples
export ACS_APPKEY_1=YOUR_ACS_TEST_APPKEY_1
export ACS_APPKEY_2=YOUR_ACS_TEST_APPKEY_2
node basic.js
```

## ACS Node SDK Example on Node.ACS
There is another example for ACS Node SDK to show how to run on Node.ACS as a service.
Make sure you have installed Node.ACS command line tool first:
```bash
sudo npm -g install acs
```
Then you can try:
```bash
cd acs-node-sdk/examples/over_nodeacs
# Update config.json to fill in your ACS app key
vi config.json
acs run
```
Open another session and try:
```bash
curl -b cookie.txt -c cookie.txt -X POST -F "login=YOUR_USERNAME" -F "password=YOUR_PASSWORD" http://localhost:8080/login
curl -b cookie.txt -c cookie.txt -X GET http://localhost:8080/showMe
```

# ACS Node SDK Basic Usage
## Get all supported ACS objects:
```javascript
var ACSNode = require('acs-node');
console.log(ACSNode.getACSCollection().objectList);

// [ 'Users', 'Photos', 'Likes', ... ]
```

## Get all methods in a specific ACS object: 
```javascript
var ACSNode = require('acs-node');
console.log(ACSNode.getACSCollection().Users.methodList);

// [ 'count', 'create', 'remove', 'login', 'logout', 'query', 'requestResetPassword', 'resendConfirmation', 'search', 'show', 'showMe', 'update' ]
```

## Get all detailed information of a method including required and optional parameters, and doc url:
```javascript
var ACSNode = require('acs-node');
console.log(ACSNode.getACSCollection().Users.methods.create);

// { httpMethod: 'POST',
//   requiredParam: 
//    [ { key: 'password', type: 'string' },
//      { key: 'password_confirmation', type: 'string' } ],
//   optionalParam: 
//    [ { key: 'email', type: 'string' },
//      { key: 'username', type: 'string' },
//      { key: 'first_name', type: 'string' },
//      { key: 'last_name', type: 'string' },
//      { key: 'photo', type: 'object' },
//      { key: 'photo_id', type: 'string' },
//      { key: 'custom_fields', type: 'object' },
//      { key: 'acl_name', type: 'string' },
//      { key: 'acl_id', type: 'string' },
//      { key: 'role', type: 'string' },
//      { key: 'template', type: 'string' },
//      { key: 'confirmation_template', type: 'string' },
//      { key: 'pretty_json', type: 'boolean' } ],
//   docUrl: 'http://docs.appcelerator.com/cloud/latest/#!/api/Users-method-create' }
```

## Straightforward call
```javascript
ACSNode.Users.login(ACS_APPKEY, {
    login: ACS_USERNAME,
    password: ACS_PASSWORD
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('ACS returned body: %j', result.body);
    console.log('Cookie string returned: %s', result.cookieString);
    ACSNode.Users.showMe(ACS_APPKEY, {
        cookieString: result.cookieString
    }, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('ACS returned user: %j', result.body);
    });
});
```

## Create an instance of ACS app
```javascript
var myApp = new ACSNode.ACSApp(ACS_APPKEY);
myApp.Users.login({
    login: ACS_USERNAME,
    password: ACS_PASSWORD
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Logged in user: %j', result.body);
    myApp.Users.showMe({
        cookieString: result.cookieString
    }, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Show user: %j', result.body);
    });
});
```

## Use ACS Node SDK inner express or http/https NodeJS module
```javascript
// HTTP call 1 with cookie:
ACSNode.Users.login(ACS_APPKEY, {
    login: req.body.login,
    password: req.body.password,
    req: req,
    res: res
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    res.end(result.body);
});

// HTTP call 2 with cookie, after HTTP call 1:
ACSNode.Users.showMe(ACS_APPKEY, {
    req: req,
    res: res
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    res.end(result.body);
});
```

## General RestAPI call
```javascript
ACSNode.post(ACS_APPKEY, '/v1/users/login.json', {
    login: ACS_USERNAME,
    password: ACS_PASSWORD
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('ACS returned body: %j', result.body);
    console.log('Cookie string returned: %s', result.cookieString);
    ACSNode.get(ACS_APPKEY, '/v1/users/show/me.json', {
        cookieString: result.cookieString
    }, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('ACS returned user: %j', result.body);
    });
});
```
