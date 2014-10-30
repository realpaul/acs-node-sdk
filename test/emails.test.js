var assert = require('assert'),
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
    acsUserCount = 0,
    event_id = null;


describe('Events Test', function() {
    before(function(done) {
        testUtil.generateUsername(function(username) {
            acsUsername = username;
            console.log('\tGenerated acs user: %s', acsUsername);
            done();
        });
    });

    describe('create event', function() {
        it('Should create user successfully', function(done) {
            this.timeout(20000);
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
                assert(result.body.response);
                assert(result.body.response.users);
                assert(result.body.response.users[0]);
                assert.equal(result.body.response.users[0].username, acsUsername);
                assert(result.cookieString);
                acsApp.setSessionByCookieString(result.cookieString);
                done();
            });
        });

        it('Should count emails successfully', function(done) {
            acsApp.emailsCount(function(err, result) {
                assert.ifError(err);
                assert(result.body);
                console.log(JSON.stringify(result));
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);

                done();
            });
        });

        it('Should send email successfully', function(done) {
            acsApp.emailsEmailFromTemplate({

            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                console.log(JSON.stringify(result));
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);

                done();
            });
        });

        it('Should delete current user successfully', function(done) {
            this.timeout(20000);
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
