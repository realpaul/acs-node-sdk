var assert = require('assert'),
    fs = require('fs'),
    should = require('should'),
    testUtil = require('./testUtil');

var acsKey = process.env.ACS_APPKEY;
if (!acsKey) {
    console.error('Please create an ACS app and assign ACS_APPKEY in environment vars.');
    process.exit(1);
}
console.log('MD5 of ACS_APPKEY: %s', testUtil.md5(acsKey));

var acsApp = require('../index')(acsKey),
    acsUsername = null,
    acsPassword = 'cocoafish',
    name = 'SN',
    value = '098765432';


describe('Keyvalues Test', function() {
    this.timeout(50000);
    before(function(done) {
        testUtil.generateUsername(function(username) {
            acsUsername = username;
            console.log('\tGenerated acs user: %s', acsUsername);
            done();
        });
    });

    describe('create user and event', function() {
        it('Should create user successfully', function(done) {
            acsApp.usersCreate({
                username: acsUsername,
                password: acsPassword,
                password_confirmation: acsPassword
            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'createUser');
                var obj = result.body.response.users[0];
                assert.equal(obj.username, acsUsername);
                assert(result.cookieString);
                acsApp.setSessionByCookieString(result.cookieString);
                done();
            });
        });
    });

    describe('positive posts tests', function() {
        it('Should create a keyvalue successfully', function(done) {
            acsApp.keyValuesSet({
                name: name,
                value: value
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'setKeyvalue');
                done();
            });
        });

        it('Should append a keyvalue successfully', function(done) {
            var appended_value = '1234567890';
            acsApp.keyValuesAppend({
                name: name,
                value: appended_value
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'appendKeyvalue');
                var obj = result.body.response.keyvalues[0];
                assert.equal(obj.name, name);
                assert.equal(obj.value, value + appended_value);
                done();
            });
        });

        it('Should create a keyvalue successfully', function(done) {
            acsApp.keyValuesDelete({
                name: name
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteKeyvalue');
                done();
            });
        });
    });

    describe('negative posts tests', function() {

    });

    describe('cleanup', function() {

        it('Should delete current user successfully', function(done) {
            acsApp.usersRemove(function(err, result) {
                assert.ifError(err);
                assert(result);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteUser');
                done();
            });
        });
    });
});
