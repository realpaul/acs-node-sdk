var ACSNode = require('../lib/acs');
var acsKey1 = 'APPKEY1';
var acsKey2 = 'APPKEY2';

console.log('Get all supported objects: ACSNode.getACSCollection().objectList');
console.log(ACSNode.getACSCollection().objectList);
console.log();

console.log('Get all methods in object Users: ACSNode.getACSCollection().Users.methodList');
console.log(ACSNode.getACSCollection().Users.methodList);
console.log();

console.log('Get all detailed information of a method including required and optional parameters, and doc url: ACSNode.getACSCollection().Users.methods.create');
console.log(ACSNode.getACSCollection().Users.methods.create);
console.log();


console.log('Straightforward use without an instance of ACS app');
ACSNode.Users.login(acsKey1, {
    login: 'paul',
    password: 'cocoafish'
}, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('User login request finished.');
    console.log(JSON.stringify(result.body));
    ACSNode.Users.showMe(acsKey1, {
        cookieString: result.cookieString
    }, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('User showme request finished.')
        console.log(JSON.stringify(result.body));
        console.log();
        acsAppInstance();
    });
});


function acsAppInstance() {
    // Create an ACS app instance
    console.log('Create an instance of ACS app to use');
    var myApp1 = new ACSNode.ACSApp(acsKey1);
    myApp1.Users.login({
        login: 'paul',
        password: 'cocoafish'
    }, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('User login request finished.');
        console.log(JSON.stringify(result.body, null, 2));
        myApp1.Users.showMe({
            cookieString: result.cookieString
        }, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('User showme request finished.')
            console.log(JSON.stringify(result.body, null, 2));
            console.log();
        });
    });

    // Create another ACS app instance
    var myApp2 = new ACSNode.ACSApp(acsKey2, {
        apiEntryPoint: 'carp-api.cloud.appcelerator.com'
    });
    console.log('ACS app 1: %s', myApp1.appKey);
    console.log('ACS app 2: %s (%s)', myApp2.appKey, myApp2.appOptions.apiEntryPoint);
    console.log();
}
