var colors = require('colors');
var ACSNode = require('../lib/acs');
var acsKey1 = process.env.ACS_APPKEY_1;
var acsKey2 = process.env.ACS_APPKEY_2;

if (!acsKey1 || !acsKey2) {
    console.error('Please set environment vars for ACS_APPKEY_1 and ACS_APPKEY_2'.red);
    process.exit(1);
}

console.log('Get all supported objects: ACSNode.getACSCollection().objectList'.cyan);
console.log(ACSNode.getACSCollection().objectList);
console.log();

console.log('Get all methods in object Users: ACSNode.getACSCollection().Users.methodList'.cyan);
console.log(ACSNode.getACSCollection().Users.methodList);
console.log();

console.log('Get all detailed information of a method including required and optional parameters, and doc url: ACSNode.getACSCollection().Users.methods.create'.cyan);
console.log(ACSNode.getACSCollection().Users.methods.create);
console.log();


console.log('Straightforward use without an instance of ACS app'.cyan);
ACSNode.Users.login(acsKey1, {
    login: 'paul',
    password: 'cocoafish'
}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('User login request finished.'.magenta);
    console.log(JSON.stringify(result.body));
    ACSNode.Users.showMe(acsKey1, {
        cookieString: result.cookieString
    }, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('User showme request finished.'.magenta);
        console.log(JSON.stringify(result.body));
        ACSNode.get(acsKey2, '/v1/users/count.json', function(err, result) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('User count finished.'.magenta);
            console.log(JSON.stringify(result.body));
            console.log();

            acsAppInstance();
        });
    });
});


function acsAppInstance() {
    console.log('Create an instance of ACS app to use'.cyan);
    var myApp1 = new ACSNode.ACSApp(acsKey1);
    console.log('Create another ACS app instance'.cyan);
    var myApp2 = new ACSNode.ACSApp(acsKey2, {
        apiEntryPoint: 'api.cloud.appcelerator.com'
    });
    console.log('ACS app 1: %s'.magenta, myApp1.appKey);
    console.log('ACS app 2: %s (%s)'.magenta, myApp2.appKey, myApp2.appOptions.apiEntryPoint);
    console.log();

    console.log('Cross use of mutiple ACS apps'.cyan);
    myApp1.Users.login({
        login: 'paul',
        password: 'cocoafish'
    }, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('User login request finished for ACS app 1.'.magenta);
        console.log(JSON.stringify(result.body, null, 2));
        var cookieString = result.cookieString;
        myApp2.get('/v1/users/count.json', function(err, result) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('User count finished for ACS app 2.'.magenta);
            console.log(JSON.stringify(result.body, null, 2));
            myApp1.Users.showMe({
                cookieString: cookieString
            }, function(err, result) {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('User showMe request finished ACS app 1.'.magenta);
                console.log(JSON.stringify(result.body, null, 2));
            });
        });
    });
}
