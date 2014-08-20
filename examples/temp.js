var ACSNode = require('../lib/acs');
var acsKey = 'O6CUNUlgbJCVr6hFjUcFOsIVzMO917G4';

// ACSNode.Users.login(acsKey, {
//     login: 'paul',
//     password: 'cocoafish'
// }, function(err, result) {
//     console.log(err);
//     console.log(result);
//     ACSNode.Users.showMe(acsKey, {
//      cookieString: result.cookieString
//     },function(err, result) {
//         console.log(err);
//         console.log(result);
//     });
// });


var myApp = new ACSNode.ACSApp(acsKey);
myApp.Users.login({
    login: 'paul',
    password: 'cocoafish'
}, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('User logged in.')
        console.log(JSON.stringify(result.body, null, 2));
        myApp.Users.showMe({
            cookieString: result.cookieString
        }, function(err, result) {
            if (err) {
                console.log(err);
            }
            console.log('User shown.')
            console.log(JSON.stringify(result.body, null, 2));
        });
    }
});
