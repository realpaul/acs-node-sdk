var assert = require('assert');
var crypto = require('crypto');
var ACSNode = require('../index');

var acsKey = process.env.ACS_APPKEY;
console.log('ACS_APPKEY: %s', acsKey);
var acsUsername = null;
var acsPassword = 'cocoafish';
var acsUserCount = 0;
var cookieString = null;


function generateUsername(callback) {
    crypto.randomBytes(5, function(ex, buf) {
        acsUsername = 'acsuser_' + buf.toString('hex');
        console.log('\tGenerated acs user: %s', acsUsername);
        return callback ? callback(null) : null;
    });
}

describe('ACS Users Test', function() {
    before(function(done) {
        generateUsername(function() {
            done();
        });
    });

    it('.countUser-1', function(done) {
        this.timeout(10000);
        ACSNode.Users.count(acsKey, function(err, result) {
            assert.ifError(err);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            // A bug of https://jira.appcelerator.org/browse/CLOUDSRV-4022
            // assert.equal(result.body.meta.method_name, 'countUser');
            assert(result.body.response);
            assert(result.body.response.users);
            assert.equal(typeof result.body.response.users, 'number');
            console.log('\tCurrent users count: %s', result.body.response.users);
            acsUserCount = result.body.response.users;
            done();
        });
    });

    it('.createUser', function(done) {
        this.timeout(10000);
        ACSNode.Users.create(acsKey, {
            username: acsUsername,
            password: acsPassword,
            password_confirmation: acsPassword
        }, function(err, result) {
            assert.ifError(err);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            assert.equal(result.body.meta.method_name, 'createUser');
            assert(result.body.response);
            assert(result.body.response.users);
            assert(result.body.response.users[0]);
            assert.equal(result.body.response.users[0].username, acsUsername);
            assert(result.cookieString);
            done();
        });
    });

    it('.countUser-2', function(done) {
        this.timeout(10000);
        ACSNode.Users.count(acsKey, function(err, result) {
            assert.ifError(err);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            // A bug of https://jira.appcelerator.org/browse/CLOUDSRV-4022
            // assert.equal(result.body.meta.method_name, 'countUser');
            assert(result.body.response);
            assert(result.body.response.users);
            assert.equal(typeof result.body.response.users, 'number');
            console.log('\tCurrent users count: %s', result.body.response.users);
            assert.equal(result.body.response.users, acsUserCount + 1);
            done();
        });
    });

    it('.queryUsers', function(done) {
        this.timeout(10000);
        ACSNode.Users.query(acsKey, {
            where: {
                username: acsUsername
            }
        }, function(err, result) {
            assert.ifError(err);
            assert(result);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            assert.equal(result.body.meta.method_name, 'queryUsers');
            assert(result.body.response);
            assert(result.body.response.users);
            assert(result.body.response.users[0]);
            assert.equal(result.body.response.users[0].username, acsUsername);
            done();
        });
    });

    it('.loginUser', function(done) {
        this.timeout(10000);
        ACSNode.Users.login(acsKey, {
            login: acsUsername,
            password: acsPassword
        }, function(err, result) {
            assert.ifError(err);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            assert.equal(result.body.meta.method_name, 'loginUser');
            assert(result.body.response);
            assert(result.body.response.users);
            assert(result.body.response.users[0]);
            assert.equal(result.body.response.users[0].username, acsUsername);
            assert(result.cookieString);
            cookieString = result.cookieString;
            done();
        });
    });

    it('.showMe', function(done) {
        this.timeout(10000);
        ACSNode.Users.showMe(acsKey, {
            cookieString: cookieString
        }, function(err, result) {
            assert.ifError(err);
            assert(result);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            assert.equal(result.body.meta.method_name, 'showMe');
            assert(result.body.response);
            assert(result.body.response.users);
            assert(result.body.response.users[0]);
            assert.equal(result.body.response.users[0].username, acsUsername);
            assert(result.cookieString);
            cookieString = result.cookieString;
            done();
        });
    });

    it('.deleteUser', function(done) {
        this.timeout(10000);
        ACSNode.Users.remove(acsKey, {
            cookieString: cookieString
        }, function(err, result) {
            assert.ifError(err);
            assert(result);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            assert.equal(result.body.meta.method_name, 'deleteUser');
            assert(result.cookieString);
            done();
        });
    });

    it('.countUser-3', function(done) {
        this.timeout(10000);
        ACSNode.Users.count(acsKey, function(err, result) {
            assert.ifError(err);
            assert(result.body);
            assert(result.body.meta);
            assert.equal(result.body.meta.code, 200);
            // A bug of https://jira.appcelerator.org/browse/CLOUDSRV-4022
            // assert.equal(result.body.meta.method_name, 'countUser');
            assert(result.body.response);
            assert(result.body.response.users);
            assert.equal(typeof result.body.response.users, 'number');
            console.log('\tCurrent users count: %s', result.body.response.users);
            // Delayed job and need time to wait for
            //assert.equal(result.body.response.users, acsUserCount);
            done();
        });
    });
});
