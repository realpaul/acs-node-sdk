const DOC_BASE_URL = 'http://docs.appcelerator.com/cloud/latest/#!/api/';

var acsCollection = {
	Users: {
		fields: [{
			key: 'created_at',
			type: 'date'
		}, {
			key: 'custom_field',
			type: 'string'
		}, {
			key: 'email',
			type: 'string'
		}, {
			key: 'external_account',
			type: 'array'
		}, {
			key: 'first_name',
			type: 'string'
		}, {
			key: 'id',
			type: 'object'
		}, {
			key: 'last_name',
			type: 'string'
		}, {
			key: 'photo',
			type: 'string'
		}, {
			key: 'role',
			type: 'string'
		}, {
			key: 'updated_at',
			type: 'date'
		}, {
			key: 'username',
			type: 'string'
		}],
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
					types: ['object', 'string']
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
				optionalParam: [{
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
					types: ['object', 'string']
				}, {
					key: 'acl_name',
					type: 'string'
				}, {
					key: 'acl_id',
					type: 'string'
				}, {
					key: 'pretty_json',
					type: 'boolean'
				}]
			}
		}
	},
    Chats: {
        fields: {
            chatgroup: 'string',
            created_at: 'date',
            custom_fields: 'string',
            id: 'object',
            message: 'string',
            photo: 'string',
            updated_at: 'date'
        },
        methods: {
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [],
                optionalParam: [{
                    key: 'to_ids',
                    type: 'string'
                },{
                    key: 'chat_group_id',
                    type: 'string'
                },{
                    key: 'message',
                    type: 'string'
                },{
                    key: 'photo',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'custom_fields',
                    type: 'string'
                },{
                    key: 'channel',
                    type: 'string'
                },{
                    key: 'payload',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            delete: {
                httpMethod: 'DELETE',
                requiredParam: [],
                optionalParam: [{
                    key: 'chat_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            getChatGroups: {
                httpMethod: 'GET',
                restMethod: 'get_chat_groups',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'string'
                },{
                    key: 'per_page',
                    type: 'string'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            query: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'participate_ids',
                    type: 'string'
                },{
                    key: 'chat_group_id',
                    type: 'string'
                },{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
                    key: 'limit',
                    type: 'number'
                },{
                    key: 'skip',
                    type: 'number'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'sel',
                    type: 'string'
                },{
                    key: 'unsel',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                }]
            },
            queryChatGroups: {
                httpMethod: 'GET',
                restMethod: 'query_chat_groups',
                requiredParam: [],
                optionalParam: [{
                    key: 'participate_ids',
                    type: 'string'
                },{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
                    key: 'limit',
                    type: 'number'
                },{
                    key: 'skip',
                    type: 'number'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'sel',
                    type: 'string'
                },{
                    key: 'unsel',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                }]}
        }
    },
    Checkins: {
        fields: {
            created_at: 'date',
            custom_fields: 'string',
            event: 'object',
            id: 'string',
            message: 'string',
            photo: 'string',
            place: 'object',
            tags: 'string',
            updated_at: 'date',
            user: 'object'
        },
        methods: {
            batchDelete: {
                httpMethod: 'DELETE',
                restMethod: 'batch_delete',
                requiredParam: [],
                optionalParam: [{
                    key: 'where',
                    type: ['string','object']
                }]
            },
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: []
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [],
                optionalParam: [{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'message',
                    type: 'string'
                },{
                    key: 'photo',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
                    key: 'tags',
                    type: 'string'
                },{
                    key: 'custom_fields',
                    type: ['string','object']
                },{
                    key: 'acl_name',
                    type: 'string'
                },{
                    key: 'acs_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                }]
            },
            delete: {
                httpMethod: 'DELETE',
                requiredParam: [],
                optionalParam: [{
                    key: 'checkin_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
                    key: 'user_id',
                    type: 'string'
                }]
            },
            query: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'limit',
                    type: 'number'
                },{
                    key: 'skip',
                    type: 'number'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'sel',
                    type: 'string'
                },{
                    key: 'show_user_like',
                    type: 'boolean'
                },{
                    key: 'unsel',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            show: {
                httpMethod: 'GET',
                requiredParam: [{
                    key: 'checkin_id',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'show_user_like',
                    type: 'boolean'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            update: {
                httpMethod: 'POST',
                requiredParam: [{
                    key: 'checkin_id',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'message',
                    type: 'string'
                },{
                    key: 'photo',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
                    key: 'tags',
                    type: 'string'
                },{
                    key: 'custom_fields',
                    type: ['string','object']
                },{
                    key: 'acl_name',
                    type: 'string'
                },{
                    key: 'acs_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                }]
            }
        }
    },
    Events: {
        fields: {
            acl: 'object',
            created_at: 'date',
            custom_fields: 'string',
            details: 'string',
            id: 'string',
            duration: 'number',
            ical: 'string',
            id: 'string',
            name: 'string',
            photo: 'object',
            place: 'object',
            recurring: 'string',
            recurring_count: 'number',
            recurring_until: 'date',
            start_time: ['date,string'],
            tags: 'object',
            updated_at: 'date',
            user: 'object'
        },
        methods: {
            batchDelete: {
                httpMethod: 'DELETE',
                restMethod: 'batch_delete',
                requiredParam: [],
                optionalParam: [{
                    key: 'where',
                    type: 'string'
                }]
            },
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: []
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                },{
                    key: 'start_time',
                    types: ['date','string']
                }],
                optionalParam: [{
                    key: 'details',
                    type: 'string'
                },{
                    key: 'duration',
                    type: 'number'
                },{
                    key: 'recurring',
                    type: 'string'
                },{
                    key: 'recurring_count',
                    type: 'number'
                },{
                    key: 'recurring_until',
                    type: 'date'
                },{
                    key: 'user',
                    type: 'object'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'photo',
                    type: 'object'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'custom_fields',
                    type: 'string'
                },{
                    key: 'acl_name',
                    type: 'string'
                },{
                    key: 'acs_id',
                    type: 'string'
                },{
                    key: 'tags',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            delete: {
                httpMethod: 'DELETE',
                requiredParam: [{
                    key: 'event_id',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'user_id',
                    type: 'string'
                },{
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
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'limit',
                    type: 'number'
                },{
                    key: 'skip',
                    type: 'number'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'sel',
                    type: 'string'
                },{
                    key: 'show_user_like',
                    type: 'boolean'
                },{
                    key: 'unsel',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            queryOccurrences: {
                httpMethod: 'GET',
                restMethod: 'query/occurrences',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'limit',
                    type: 'number'
                },{
                    key: 'skip',
                    type: 'number'
                },{
                    key: 'where',
                    type: 'string'
                },{
                    key: 'order',
                    type: 'string'
                },{
                    key: 'sel',
                    type: 'string'
                },{
                    key: 'unsel',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
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
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'latitude',
                    type: 'number'
                },{
                    key: 'longitude',
                    type: 'number'
                },{
                    key: 'distance',
                    type: 'number'
                },{
                    key: 'start_time',
                    type: 'date'
                },{
                    key: 'q',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            searchOccurrences: {
                httpMethod: 'GET',
                restMethod: 'search/occurrences',
                requiredParam: [],
                optionalParam: [{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'latitude',
                    type: 'number'
                },{
                    key: 'longitude',
                    type: 'number'
                },{
                    key: 'distance',
                    type: 'number'
                },{
                    key: 'start_time',
                    type: 'date'
                },{
                    key: 'end_time',
                    type: 'date'
                },{
                    key: 'q',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            show: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: [{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'events_id',
                    type: 'string'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'show_user_like',
                    type: 'boolean'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            showOccurrences: {
                httpMethod: 'GET',
                restMethod: 'show/occurrences',
                requiredParam: [],
                optionalParam: [{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'page',
                    type: 'number'
                },{
                    key: 'per_page',
                    type: 'number'
                },{
                    key: 'response_json_depth',
                    type: 'number'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            update: {
                httpMethod: 'PUT',
                requiredParam: [{
                    key: 'event_id',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'name',
                    type: 'string'
                },{
                    key: 'start_time',
                    type: 'date'
                },{
                    key: 'duration',
                    type: 'number'
                },{
                    key: 'recurring',
                    type: 'string'
                },{
                    key: 'recurring_count',
                    type: 'number'
                },{
                    key: 'recurring_until',
                    type: 'date'
                },{
                    key: 'details',
                    type: 'string'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'photo',
                    type: 'object'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'tags',
                    type: 'string'
                },{
                    key: 'custom_fields',
                    type: 'string'
                },{
                    key: 'acl_name',
                    type: 'string'
                },{
                    key: 'acl_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            }
        }
    },
    Emails: {
//        restObject: 'email_templates',
//        restObject: 'custom_mailer',
        fields: {
        },
        methods: {
            count: {
                httpMethod: 'GET',
//                restMethod: 'email_templates/count',
                restObject: 'email_templates',
                requiredParam: [],
                optionalParam: []
            },
            send: {
                httpMethod: 'POST',
                restObject: 'custom_mailer',
                restMethod: 'email_from_template',
                requiredParam: [{
                    key: 'template',
                    type: 'string'
                },{
                    key: 'recipients',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'from',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            }
        }
    }
};

for (var acsObjectKey in acsCollection) {
	var acsObject = acsCollection[acsObjectKey];
	acsObject.docUrl = DOC_BASE_URL + acsObjectKey;
	acsObject.fieldList = acsObject.fields;
	acsObject.methodList = Object.keys(acsObject.methods);
}
acsCollection.objectList = Object.keys(acsCollection);

module.exports = acsCollection;
