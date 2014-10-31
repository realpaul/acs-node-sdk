var assert = require('assert'),
    fs = require('fs'),
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

        it('Should create an event successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsCreate({
                name: 'Test - events',
                photo: fs.createReadStream('/Users/kzhang/tmp/carp/16k.jpg'),
//                start_time: '2011-03-22T20:59:50+0000',
                start_time: new Date(),
                duration: 3
            },function(err, result) {
                assert.ifError(err);
//                console.log(JSON.stringify(result));
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                event_id = result.body.response.events[0].id;
                done();
            });
        });

        it('Should update an event successfully', function(done) {
            this.timeout(20000);
            var event_name = 'Test - new events';
            acsApp.eventsUpdate({
                event_id: event_id,
                name: event_name,
                start_time: new Date(),
                duration: 6
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                assert.equal(result.body.response.events[0].name, event_name);
                assert.equal(result.body.response.events[0].duration, 6);
                assert.equal(result.body.response.events[0].id, event_id);
                done();
            });
        });

        it('Should show an event successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsShow({
                event_id: event_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                assert.equal(result.body.meta.method_name, 'showEvents');
                done();
            });
        });

        it('Should show an event occurrences successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsShowOccurrences({
                event_id: event_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.event_occurrences);
                assert.equal(result.body.meta.method_name, 'showEventOccurrences');
                done();
            });
        });

        it('Should query events successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsQuery({
                },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                done();
            });
        });

        it('Should query event occurrences successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsQueryOccurrences({
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'queryEventOccurrences');
                done();
            });
        });

        it('Should search events successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsSearch({
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert(result.body.response);
                assert(result.body.response.events);
                done();
            });
        });

        it('Should search event occurrences successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsSearchOccurrences({
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'searchEventOccurrences');
                done();
            });
        });

        it('Should count event successfully', function(done) {
            acsApp.eventsCount(function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);

                done();
            });
        });

        it('Should delete an event successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsDelete({
                event_id: event_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteEvent');
                done();
            });
        });

        it('Should delete a batch of events successfully', function(done) {
            this.timeout(20000);
            acsApp.eventsBatchDelete({
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 403);
                assert.equal(result.body.meta.message, 'You are not authorized to perform this action.');
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
