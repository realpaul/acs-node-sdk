var acsCollection = {
    Users: {
        fields: {
            created_at: 'date',
            custom_field: 'string',
            email: 'string',
            external_account: 'string',
            first_name: 'string',
            id: 'object',
            last_name: 'string',
            photo: 'string',
            role: 'string',
            updated_at: 'date',
            username: 'string'
        },
        methods: {
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'users',
                    type: 'number'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [{
                    key: 'password',
                    type: 'string'
                }, {
                    key: 'password_confirmation',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'email',
                    type: 'string'
                }, {
                    key: 'username',
                    type: 'string'
                }, {
                    key: 'first_name',
                    type: 'string'
                }, {
                    key: 'last_name',
                    type: 'string'
                }, {
                    key: 'photo',
                    type: 'object'
                }, {
                    key: 'photo_id',
                    type: 'string'
                }, {
                    key: 'custom_fields',
                    type: 'object'
                }, {
                    key: 'acl_name',
                    type: 'string'
                }, {
                    key: 'acl_id',
                    type: 'string'
                }, {
                    key: 'role',
                    type: 'string'
                }, {
                    key: 'template',
                    type: 'string'
                }, {
                    key: 'confirmation_template',
                    type: 'string'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            remove: {
                httpMethod: 'DELETE',
                restMethod: 'delete',
                requiredParam: [],
                optionalParam: [{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            login: {
                httpMethod: 'POST',
                requiredParam: [],
                optionalParam: [{
                    key: 'login',
                    type: 'string'
                }, {
                    key: 'password',
                    type: 'string'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            logout: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'device_token',
                    type: 'string'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            query: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'number'
                }, {
                    key: 'per_page',
                    type: 'number'
                }, {
                    key: 'limit',
                    type: 'number'
                }, {
                    key: 'skip',
                    type: 'number'
                }, {
                    key: 'where',
                    type: 'object'
                }, {
                    key: 'order',
                    type: 'string'
                }, {
                    key: 'sel',
                    type: 'object'
                }, {
                    key: 'show_user_like',
                    type: 'boolean'
                }, {
                    key: 'unsel',
                    type: 'object'
                }, {
                    key: 'response_json_depth',
                    type: 'number'
                }, {
                    key: 'key',
                    type: 'string'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            requestResetPassword: {
                httpMethod: 'GET',
                restMethod: 'request_reset_password',
                requiredParam: [{
                    key: 'email',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'subject',
                    type: 'string'
                }, {
                    key: 'template',
                    type: 'string'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            resendConfirmation: {
                httpMethod: 'GET',
                restMethod: 'resend_confirmation.json',
                requiredParam: [{
                    key: 'email',
                    type: 'string'
                }, {
                    key: 'confirmation_subject',
                    type: 'string'
                }, {
                    key: 'confirmation_template',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            search: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'number'
                }, {
                    key: 'per_page',
                    type: 'number'
                }, {
                    key: 'q',
                    type: 'string'
                }, {
                    key: 'response_json_depth',
                    type: 'number'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            show: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'user_id',
                    type: 'string'
                }, {
                    key: 'user_ids',
                    type: 'string'
                }, {
                    key: 'response_json_depth',
                    type: 'number'
                }, {
                    key: 'show_user_like',
                    type: 'boolean'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            showMe: {
                httpMethod: 'GET',
                restMethod: 'show/me',
                requiredParam: [],
                optionalParam: [{
                    key: 'response_json_depth',
                    type: 'number'
                }, {
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            update: {
                httpMethod: 'PUT',
                requiredParam: [],
                optionalParam: [
                    {
                        key: 'email',
                        type: 'string'
                    }, {
                        key: 'username',
                        type: 'string'
                    }, {
                        key: 'password',
                        type: 'string'
                    }, {
                        key: 'password_confirmation',
                        type: 'string'
                    }, {
                        key: 'first_name',
                        type: 'string'
                    }, {
                        key: 'last_name',
                        type: 'string'
                    }, {
                        key: 'photo',
                        type: 'object'
                    }, {
                        key: 'photo_id',
                        type: 'string'
                    }, {
                        key: 'tags',
                        type: 'string'
                    }, {
                        key: 'custom_fields',
                        type: 'object'
                    }, {
                        key: 'acl_name',
                        type: 'string'
                    }, {
                        key: 'acl_id',
                        type: 'string'
                    }, {
                        key: 'pretty_json',
                        type: 'boolean'
                    }
                ]
            }
        }
    }
};

var objectList = [];
var acsObjectKeys = Object.keys(acsCollection);
for (var i = 0; i < acsObjectKeys.length; i++) {
    var acsObjectKey = acsObjectKeys[i];
    objectList.push(acsObjectKey);
    var acsObject = acsCollection[acsObjectKey];
    acsObject.fieldList = [];
    var acsObjectFieldKeys = Object.keys(acsObject.fields);
    for (var j = 0; j < acsObjectFieldKeys.length; j++) {
        var acsObjectField = acsObjectFieldKeys[j];
        acsObject.fieldList.push(acsObjectField);
    }
    acsObject.methodList = [];
    var acsObjectMethodKeys = Object.keys(acsObject.methods);
    for (var j = 0; j < acsObjectMethodKeys.length; j++) {
        var acsObjectMethod = acsObjectMethodKeys[j];
        acsObject.methodList.push(acsObjectMethod);
    }
}
acsCollection.objectList = objectList;

exports = module.exports = acsCollection;
