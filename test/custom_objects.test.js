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
    classname = "Beijing",
    obj_id = null;


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

        it('Should create a custom object successfully - create', function(done) {
            acsApp.customObjectsCreate({
                classname: classname,
                fields: '{"city":"beijing"}'
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'createObject');
                var obj = result.body.response[classname][0];
                obj_id = obj.id;
                done();
            });
        });

        it('Should show a custom object successfully - show', function(done) {
            acsApp.customObjectsShow({
                id: obj_id,
                classname: classname
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'showObjects');
                var obj = result.body.response[classname][0];
                assert.equal(obj.city, "beijing");
                done();
            });
        });

        it('Should query custom objects successfully - query', function(done) {
            acsApp.customObjectsQuery({
                classname: classname
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);

                done();
            });
        });

        it('Should update a custom object successfully - update', function(done) {
            acsApp.customObjectsUpdate({
                id: obj_id,
                classname: classname,
                fields: '{"city": "Tianjing"}'
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'updateCustomObject');
                var obj = result.body.response[classname][0];
                assert.equal(obj.city, "Tianjing");
                obj_id = obj.id;
                done();
            });
        });

        it('Should count custom objects successfully - count', function(done) {
            acsApp.customObjectsCount({
                classname: classname
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'objectsCount');
                done();
            });
        });

        it('Should delete a custom object successfully - delete', function(done) {
            acsApp.customObjectsDelete({
                classname: classname,
                id: obj_id
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 200);
                assert.equal(result.body.meta.method_name, 'deleteObjects');

                done();
            });
        });

        it('Should fail to batch delete custom objects - batch_delete', function(done) {
            acsApp.customObjectsBatchDelete({
                classname: classname
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 403);
                done();
            });
        });

        it('Should fail to drop custom object collections - admin_drop_collection', function(done) {
            acsApp.customObjectsAdminDropCollection({
                classname: classname
            },function(err, result) {
                assert.ifError(err);
                assert(result.body);
                assert(result.body.meta);
                assert.equal(result.body.meta.code, 400);
                assert.equal(result.body.meta.method_name, 'dropCollection');
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
