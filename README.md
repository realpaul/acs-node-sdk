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
You can see the coverage report at `coverage/lcov-report/index.html`

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