const DOC_BASE_URL = 'http://docs.appcelerator.com/cloud/latest/#!/api/';

var acsCollection = {
	Users: {
		fields: [{
			key: 'created_at',
			type: 'date'
		}, {
			key: 'custom_fields',
			types: ['string', 'object']
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
			key: 'friend_counts',
			type: 'object'
		}, {
			key: 'id',
			type: 'string'
		}, {
			key: 'last_name',
			type: 'string'
		}, {
			key: 'photo',
			type: 'object'
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
			batchDelete: {
				httpMethod: 'DELETE',
				restMethod: 'batch_delete',
				requiredParam: [],
				optionalParam: [{
					key: 'where',
					type: 'object'
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
					key: 'role',
					type: 'string'
				}, {
					key: 'template',
					type: 'string'
				}, {
					key: 'confirmation_template',
					type: 'string'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				requiredParam: [],
				optionalParam: []
			},
			remove: {
				httpMethod: 'DELETE',
				restMethod: 'delete',
				requiredParam: [],
				optionalParam: []
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
				}]
			},
			logout: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'device_token',
					type: 'string'
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
				optionalParam: []
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
				}]
			},
			showMe: {
				httpMethod: 'GET',
				restMethod: 'show/me',
				requiredParam: [],
				optionalParam: [{
					key: 'response_json_depth',
					type: 'number'
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
				}]
			}
		}
	},
	ACLs: {
		fields: [{
			key: 'created_at',
			type: 'date'
		}, {
			key: 'id',
			type: 'string'
		}, {
			key: 'name',
			type: 'string'
		}, {
			key: 'public_read',
			type: 'object'
		}, {
			key: 'public_write',
			type: 'string'
		}, {
			key: 'readers',
			type: 'array'
		}, {
			key: 'updated_at',
			type: 'date'
		}, {
			key: 'user',
			type: 'object'
		}, {
			key: 'writers',
			type: 'array'
		}],
		methods: {
			checkUser: {
				httpMethod: 'GET',
				restMethod: 'check',
				requiredParam: [],
				optionalParam: [{
					key: 'name',
					type: 'string'
				}, {
					key: 'id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			},
			count: {
				httpMethod: 'GET',
				restMethod: 'count',
				requiredParam: [],
				optionalParam: []
			},
			create: {
				httpMethod: 'GET',
				restMethod: 'count',
				requiredParam: [{
					key: 'name',
					type: 'string'
				}],
				optionalParam: [{
					key: 'reader_ids',
					type: 'string'
				}, {
					key: 'writer_ids',
					type: 'string'
				}, {
					key: 'public_read',
					type: 'string'
				}, {
					key: 'public_write',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				requiredParam: [],
				optionalParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'name',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			},
			remove: {
				httpMethod: 'DELETE',
				restMethod: 'delete',
				requiredParam: [],
				optionalParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'name',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			},
			query: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'count',
					type: 'boolean'
				}, {
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
				}]
			},
			removeUser: {
				httpMethod: 'DELETE',
				restMethod: 'delete',
				requiredParam: [{
					key: 'reader_ids',
					type: 'string'
				}, {
					key: 'writer_ids',
					type: 'string'
				}],
				optionalParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'name',
					type: 'string'
				}]
			},
			show: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'name',
					type: 'string'
				}]
			},
			update: {
				httpMethod: 'PUT',
				requiredParam: [{
					key: 'reader_ids',
					type: 'string'
				}, {
					key: 'writer_ids',
					type: 'string'
				}],
				optionalParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'name',
					type: 'string'
				}, {
					key: 'public_read',
					type: 'string'
				}, {
					key: 'public_write',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			}
		}
	},
	Files: {
		fields: [{
			key: 'created_at',
			type: 'date'
		}, {
			key: 'id',
			type: 'string'
		}, {
			key: 'name',
			type: 'string'
		}, {
			key: 'processed',
			type: 'boolean'
		}, {
			key: 'updated_at',
			type: 'date'
		}, {
			key: 'url',
			type: 'string'
		}, {
			key: 'user',
			type: 'object'
		}],
		methods: {
			batchDelete: {
				httpMethod: 'DELETE',
				restMethod: 'batch_delete',
				requiredParam: [],
				optionalParam: []
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
					key: 'name',
					type: 'string'
				}, {
					key: 'file',
					types: ['object', 'string']
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
					key: 'user_id',
					type: 'string'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				requiredParam: [{
					key: 'file_id',
					type: 'string'
				}],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}]
			},
			remove: {
				httpMethod: 'DELETE',
				restMethod: 'delete',
				requiredParam: [{
					key: 'file_id',
					type: 'string'
				}],
				optionalParam: [{
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
					key: 'unsel',
					type: 'object'
				}, {
					key: 'response_json_depth',
					type: 'number'
				}]
			},
			show: {
				httpMethod: 'GET',
				requiredParam: [{
					key: 'file_id',
					type: 'string'
				}],
				optionalParam: [{
					key: 'resposne_depth',
					type: 'string'
				}]
			},
			update: {
				httpMethod: 'PUT',
				requiredParam: [{
					key: 'file_id',
					type: 'string'
				}],
				optionalParam: [{
					key: 'name',
					type: 'string'
				}, {
					key: 'file',
					types: ['object', 'string']
				}, {
					key: 'url',
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
					key: 'user_id',
					type: 'string'
				}]
			}
		}
	},
	Friends: {
		methods: {
			add: {
				httpMethod: 'POST',
				requiredParam: [{
					key: 'user_ids',
					type: 'string'
				}],
				optionalParam: [{
					key: 'approval_required',
					type: 'boolean'
				}]
			},
			approve: {
				httpMethod: 'PUT',
				requiredParam: [{
					key: 'user_ids',
					type: 'string'
				}],
				optionalParam: []
			},
			query: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}, {
					key: 'followers',
					type: 'boolean'
				}, {
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
					key: 'unsel',
					type: 'object'
				}, {
					key: 'response_json_depth',
					type: 'number'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				restMethod: 'remove',
				requiredParam: [{
					key: 'user_ids'
				}],
				optionalParam: []
			},
			remove: {
				httpMethod: 'DELETE',
				requiredParam: [{
					key: 'user_ids'
				}],
				optionalParam: []
			},
			requests: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'requests_to',
					type: 'boolean'
				}, {
					key: 'response_json_depth',
					type: 'number'
				}]
			},
			search: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}, {
					key: 'followers',
					type: 'boolean'
				}, {
					key: 'q',
					type: 'string'
				}, {
					key: 'page',
					type: 'number'
				}, {
					key: 'per_page',
					type: 'number'
				}, {
					key: 'response_json_depth',
					type: 'number'
				}]
			}
		}
	},
	Logs: {
		methods: {
			queryPushLogDetails: {
				httpMethod: 'GET',
				restMethod: 'querypushlogdetails',
				requiredParam: [{
					key: 'where',
					type: 'string'
				}],
				optionalParam: []
			},
			queryPushLogs: {
				httpMethod: 'GET',
				restMethod: 'querypushlogs',
				requiredParam: [],
				optionalParam: []
			}
		}
	},
	PushNotifications: {
		methods: {
			queryChannels: {
				httpMethod: 'GET',
				restMethod: 'channels/query',
				requiredParam: [],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}, {
					key: 'page',
					type: 'number'
				}, {
					key: 'per_page',
					type: 'number'
				}]
			},
			showChannels: {
				httpMethod: 'GET',
				restMethod: 'channels/show',
				requiredParam: [{
					key: 'name',
					type: 'string'
				}],
				optionalParam: []
			},
			count: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: []
			},
			notify: {
				httpMethod: 'POST',
				requiredParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'payload',
					type: 'string'
				}],
				optionalParam: [{
					key: 'friends',
					types: ['boolean', 'number', 'object', 'string']
				}, {
					key: 'to_ids',
					type: 'string'
				}, {
					key: 'options',
					type: 'object'
				}, {
					key: 'where',
					type: 'object'
				}]
			},
			notifyTokens: {
				httpMethod: 'POST',
				restMethod: 'notify_tokens',
				requiredParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'to_tokens',
					type: 'string'
				}, {
					key: 'payload',
					type: 'string'
				}],
				optionalParam: [{
					key: 'options',
					type: 'object'
				}, {
					key: 'where',
					type: 'object'
				}]
			},
			query: {
				httpMethod: 'GET',
				requiredParam: [{
					key: 'user_id',
					type: 'string'
				}],
				optionalParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'device_token',
					type: 'string'
				}, {
					key: 'type',
					type: 'string'
				}, {
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
				}]
			},
			resetAllBadges: {
				httpMethod: 'GET',
				restMethod: 'reset_badge',
				requiredParam: [],
				optionalParam: []
			},
			resetBadge: {
				httpMethod: 'PUT',
				restMethod: 'reset_badge',
				requiredParam: [{
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: []
			},
			setBadge: {
				httpMethod: 'PUT',
				restMethod: 'set_badge',
				requiredParam: [],
				optionalParam: [{
					key: 'device_token',
					type: 'string'
				}, {
					key: 'badge_number',
					types: ['number', 'string']
				}]
			},
			subscribe: {
				httpMethod: 'POST',
				restMethod: 'set_badge',
				requiredParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}]
			},
			subscribeToken: {
				httpMethod: 'POST',
				restMethod: 'subscribe_token',
				requiredParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'type',
					type: 'string'
				}]
			},
			updateSubscription: {
				httpMethod: 'PUT',
				restMethod: 'update',
				requiredParam: [{
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'user_id',
					type: 'string'
				}, {
					key: 'loc',
					type: 'array'
				}]
			},
			unsubscribe: {
				httpMethod: 'DELETE',
				requiredParam: [{
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'channel',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}]
			},
			unsubscribeToken: {
				httpMethod: 'DELETE',
				restMethod: 'unsubscribe_token',
				requiredParam: [{
					key: 'device_token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'channel',
					type: 'string'
				}]
			}
		}
	},
	PushSchedules: {
		fields: [{
			key: 'id',
			type: 'string'
		}, {
			key: 'name',
			type: 'string'
		}, {
			key: 'push_notification',
			type: 'object'
		}, {
			key: 'recurrence',
			type: 'object'
		}, {
			key: 'start_time',
			type: 'date'
		}],
		methods: {
			create: {
				httpMethod: 'POST',
				requiredParam: [{
					key: 'schedule',
					type: 'object'
				}],
				optionalParam: [{
					key: 'where',
					type: 'object'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				requiredParam: [],
				optionalParam: [{
					key: 'ids',
					type: 'array'
				}]
			},
			remove: {
				httpMethod: 'DELETE',
				restMethod: 'delete',
				requiredParam: [],
				optionalParam: [{
					key: 'ids',
					type: 'array'
				}]
			},
			query: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'name',
					type: 'string'
				}, {
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
				}]
			},
			update: {
				httpMethod: 'PUT',
				requiredParam: [{
					key: 'schedule',
					type: 'object'
				}, {
					key: 'id',
					type: 'string'
				}],
				optionalParam: [{
					key: 'where',
					type: 'object'
				}]
			}
		}
	},
	SocialIntegrations: {
		restObject: 'users',
		methods: {
			externalAccountLink: {
				httpMethod: 'POST',
				restMethod: 'external_account_link',
				requiredParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'type',
					type: 'string'
				}, {
					key: 'token',
					type: 'string'
				}],
				optionalParam: []
			},
			externalAccountLogin: {
				httpMethod: 'POST',
				restMethod: 'external_account_login',
				requiredParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'type',
					type: 'string'
				}, {
					key: 'token',
					type: 'string'
				}],
				optionalParam: [{
					key: 'acl_name',
					type: 'string'
				}, {
					key: 'acl_id',
					type: 'string'
				}]
			},
			externalAccountUnlink: {
				httpMethod: 'POST',
				restMethod: 'external_account_unlink',
				requiredParam: [{
					key: 'id',
					type: 'string'
				}, {
					key: 'type',
					type: 'string'
				}],
				optionalParam: []
			},
			searchFacebookFriends: {
				httpMethod: 'GET',
				restMethod: 'facebook/search_friends',
				restObject: 'social',
				requiredParam: [],
				optionalParam: []
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
    },
    KeyValues: {
        fields: {
        },
        methods: {
            append: {
                httpMethod: 'PUT',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                },{
                    key: 'value',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'access_private',
                    type: 'boolean'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: []
            },
            delete: {
                httpMethod: 'DELETE',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'access_private',
                    type: 'boolean'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            get: {
                httpMethod: 'GET',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'access_private',
                    type: 'boolean'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                }]
            },
            incrby: {
                httpMethod: 'PUT',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                },{
                    key: 'value',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'access_private',
                    type: 'boolean'
                },{
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
            set: {
                httpMethod: 'PUT',
                requiredParam: [{
                    key: 'name',
                    type: 'string'
                },{
                    key: 'value',
                    type: ['string','object']
                }],
                optionalParam: [{
                    key: 'type',
                    type: 'boolean'
                },{
                    key: 'access_private',
                    type: 'boolean'
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
    Likes: {
        fields: {
        },
        methods: {
            create: {
                httpMethod: 'PUT',
                requiredParam: [],
                optionalParam: [{
                    key: 'post_id',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'checkin_id',
                    type: 'string'
                },{
                    key: 'status_id',
                    type: 'string'
                },{
                    key: 'review_id',
                    type: 'string'
                },{
                    key: 'custom_object_id',
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
                    key: 'post_id',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'checkin_id',
                    type: 'string'
                },{
                    key: 'status_id',
                    type: 'string'
                },{
                    key: 'review_id',
                    type: 'string'
                },{
                    key: 'custom_object_id',
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
                    key: 'post_id',
                    type: 'string'
                },{
                    key: 'photo_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                },{
                    key: 'event_id',
                    type: 'string'
                },{
                    key: 'place_id',
                    type: 'string'
                },{
                    key: 'checkin_id',
                    type: 'string'
                },{
                    key: 'status_id',
                    type: 'string'
                },{
                    key: 'review_id',
                    type: 'string'
                },{
                    key: 'custom_object_id',
                    type: 'string'
                },{
                    key: 'user_object_id',
                    type: 'string'
                },{
                    key: 'pretty_json',
                    type: 'boolean'
                },{
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
            }
        }
    },
    Messages: {
        fields: {
        },
        methods: {
            count: {
                httpMethod: 'GET',
                requiredParam: [],
                optionalParam: []
            },
            create: {
                httpMethod: 'POST',
                requiredParam: [{
                    key: 'to_ids',
                    type: 'string'
                },{
                    key: 'body',
                    type: 'string'
                }],
                optionalParam: [{
                    key: 'subject',
                    type: 'string'
                },{
                    key: 'custom_fields',
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
                requiredParam: [],
                optionalParam: [{
                    key: 'message_id',
                    type: 'string'
                },{
                    key: 'user_id',
                    type: 'string'
                }]
            },
            delete_thread: {
                httpMethod: 'DELETE',
                requiredParam: [],
                optionalParam: [{
                    key: 'thread_id',
                    type: 'string'
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
