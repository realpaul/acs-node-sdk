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
