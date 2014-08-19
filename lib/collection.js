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
                    users: 'number',
                    pretty_json: 'boolean'
                }]
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [{
                    password: 'string',
                    password_confirmation: 'string'
                }],
                optionalParam: [{
                    email: 'string',
                    username: 'string',
                    first_name: 'string',
                    last_name: 'string',
                    photo: 'object',
                    photo_id: 'string',
                    tags: 'string',
                    custom_fields: 'object',
                    acl_name: 'string',
                    acl_id: 'string',
                    role: 'string',
                    template: 'string',
                    confirmation_template: 'string',
                    pretty_json: 'boolean'
                }]
            },
            delete: {
                httpMethod: 'DELETE',
                requiredParam: [],
                optionalParam: [{
                    pretty_json: 'boolean'
                }]
            },
            login: {
                httpMethod: 'POST',
                optionalParam: [{
                    login: 'string',
                    password: 'string',
                    pretty_json: 'boolean'
                }]
            },
            logout: {
                httpMethod: 'GET',
                optionalParam: [{
                    device_token: 'string',
                    pretty_json: 'boolean'
                }]
            },
            query: {
                httpMethod: 'GET',
                optionalParam: [{
                    page: 'number',
                    per_page: 'number',
                    limit: 'number',
                    skip: 'number',
                    where: 'object',
                    order: 'string',
                    sel: 'object',
                    show_user_like: 'boolean',
                    unsel: 'object',
                    response_json_depth: 'number',
                    pretty_json: 'boolean'
                }]
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
