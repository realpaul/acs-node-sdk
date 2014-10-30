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
    event_id = null,
    checkin_id = null;


describe('Checkins Test', function() {
    before(function(done) {
        testUtil.generateUsername(function(username) {
            acsUsername = username;
            console.log('\tGenerated acs user: %s', acsUsername);
            done();
        });
    });

    describe('create checkin', function() {
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

        it('Should create an event successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsCreate({
                name: 'Test - checkins(event)',
//                start_time: '2011-03-22T20:59:50+0000',
                start_time: new Date(),
                duration: 8
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                event_id = result.body.response.events[0].id;
                done();
            });
        });

        it('Should create a checkin successfully', function(done) {
            this.timeout(20000);
            acsApp.checkinsCreate({
                name: 'Test - checkins',
                event_id: event_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.checkins);
                checkin_id = result.body.response.checkins[0].id;
                assert.equal(result.body.meta.method_name, 'createCheckin');
                done();
            });
        });

        it('Should show a checkin successfully', function(done) {
            this.timeout(20000);
            acsApp.checkinsShow({
                checkin_id: checkin_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.checkins);
                assert.equal(result.body.meta.method_name, 'showCheckins');
                done();
            });
        });

        it('Should update a checkin successfully', function(done) {
            this.timeout(20000);
            var message = 'Test - new checkins(event)';
            acsApp.checkinsUpdate({
                checkin_id: checkin_id,
                message: message
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.checkins);
                assert.equal(result.body.response.checkins[0].message, message);
                assert.equal(result.body.meta.method_name, 'updateCheckin');
                done();
            });
        });

        it('Should query checkins successfully', function(done) {
            this.timeout(20000);
            var message = 'Test - new checkins(event)';
            acsApp.checkinsQuery({

            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.checkins);
                assert.equal(result.body.response.checkins[0].message, message);
                assert.equal(result.body.meta.method_name, 'queryCheckins');
                done();
            });
        });

        it('Should count checkins successfully', function(done) {
            this.timeout(20000);
            var message = 'Test - new checkins(event)';
            acsApp.checkinsCount({

            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'checkinsCount');
                done();
            });
        });

        it('Should delete a checkin successfully', function(done) {
            this.timeout(20000);
            acsApp.checkinsDelete({
                checkin_id: checkin_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteCheckin');
                done();
            });
        });

        it('Should delete a batch of checkins successfully', function(done) {
            this.timeout(20000);
            acsApp.checkinsBatchDelete({
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                console.log(JSON.stringify(result));
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 403);
                assert.equal(result.body.meta.message, 'You are not authorized to perform this action.');
                done();
            });
        });
    });

});
