var assert = require('assert'),
    testUtil = require('./testUtil');

var acsKey = process.env.ACS_APPKEY;
if (!acsKey) {
    console.error('Please create an ACS app and assign ACS_APPKEY in environment vars.');
    process.exit(1);
}
console.log('MD5 of ACS_APPKEY: %s', testUtil.md5(acsKey));

var acsApp = require('../index')(acsKey),
    acsUsername_1 = null,
    acsPassword = 'cocoafish',
    acsUserCount = 0,
    acsUsername_2 = null,
    message = "Node ACS SDK Redesign Test - chats",
    acsUser1_id = null,
    chat_group_id = null,
    chat_id = null;


describe('Chats Test', function() {
    before(function(done) {
        testUtil.generateUsername(function(username) {
            acsUsername_1 = username;
            console.log('\tGenerated acs user 1: %s', acsUsername_1);
            testUtil.generateUsername(function(username) {
                acsUsername_2 = username;
                console.log('\tGenerated acs user 2: %s', acsUsername_2);
                done();
            });
        });
    });

    describe('Test chats ', function() {
        it('Should create user 1 successfully', function(done) {
            this.timeout(20000);
            acsApp.usersCreate({
                username: acsUsername_1,
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
                assert.equal(result.body.response.users[0].username, acsUsername_1);
                assert(result.cookieString);
                acsUser1_id = result.body.response.users[0].id
                done();
            });
        });

        it('Should create user 2 successfully', function(done) {
            this.timeout(20000);
            acsApp.usersCreate({
                username: acsUsername_2,
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
                assert.equal(result.body.response.users[0].username, acsUsername_2);
                assert(result.cookieString);
                done();
            });
        });

        it('User 2 should be able to login successfully', function(done) {
            this.timeout(20000);
            acsApp.usersLogin({
                login: acsUsername_2,
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
                assert.equal(result.body.response.users[0].username, acsUsername_2);
                assert(result.cookieString);
                assert.equal(typeof result.cookieString, 'string');
                acsApp.setSessionByCookieString(result.cookieString);
                assert.equal(result.cookieString, acsApp.appOptions.cookieString);
                done();
            });
        });

        it('Should send message to user 1 successfully - create', function(done) {
            this.timeout(20000);
            acsApp.chatsCreate({
                to_ids: acsUser1_id,
                message: message
            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'createChatMessage');
                assert(result.body.response);
                assert(result.body.response.chats);
                assert(result.body.response.chats[0]);
                assert.equal(result.body.response.chats[0].message, message);
                assert(result.cookieString);
                chat_group_id = result.body.response.chats[0].chat_group_id;
                chat_id = result.body.response.chats[0].id;
                done();
            });
        });

        it('Should query chats successfully - query', function(done) {
            this.timeout(20000);
            acsApp.chatsQuery({
                participate_ids: acsUser1_id
            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'queryChatMessages');
                assert(result.body.response);
                assert(result.body.response.chats);
                assert(result.body.response.chats[0]);
                assert.equal(result.body.response.chats[0].message, message);
                assert(result.cookieString);
                done();
            });
        });

        it('Should get chat groups that user 1 participates in successfully - get_chat_groups', function(done) {
            this.timeout(20000);
            acsApp.chatsGetChatGroups({

            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'getChatGroups');
                assert(result.body.response);
                assert(result.body.response.chat_groups);
                assert(result.body.response.chat_groups[0]);
                assert.equal(result.body.response.chat_groups[0].message, message);
                assert(result.cookieString);
                done();
            });
        });

        it('Should fail to query chat groups - query_chat_groups', function(done) {
            this.timeout(20000);
            acsApp.chatsQueryChatGroups({

            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 403);
                done();
            });
        });

        it('Should get the count of chats successfully - count', function(done) {
            this.timeout(20000);
            acsApp.chatsCount(function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'chatsCount');
                console.log('\tCurrent chats count: %s', result.body.meta.count);
                done();
            });
        });

        it('Should delete chat that user 1 participates in successfully - delete', function(done) {
            this.timeout(20000);
            acsApp.chatsDelete({
                chat_id: chat_id
            }, function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteChat');
                done();
            });
        });
    });
});
