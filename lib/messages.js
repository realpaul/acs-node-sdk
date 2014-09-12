var messages = {
    ERR_MISS_REQUIRED_PARAMETER: {
        errorCode: 1001,
        message: 'Required parameter %parameter% is missing.',
        docUrl: 'TBD'
    },
    ERR_WRONG_TYPE: {
        errorCode: 1002,
        message: 'Wrong type of %type_name%.',
        docUrl: 'TBD'
    },
    ERR_WRONG_PARAMETER_TYPE: {
        errorCode: 1003,
        message: 'Parameter type of  %type_name% is wrong. Required: %required_type%, actual: %actual_type%.',
        docUrl: 'TBD'
    }
};

module.exports = messages;
