const dataTypeMap = {
    boolean: 'checkbox',
    datetime: 'datetime',
    date: 'date',
    email: 'email',
    currency: 'number',
    number: 'number',
    percent: 'number',
    url: 'url',
    double: 'number',
    time: 'time'
};
const operaterMap = {
    checkbox: [{ label: 'equals', value: '=' }],
    datetime: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'less than', value: '<' },
        { label: 'greater than', value: '>' },
        { label: 'less or equal', value: '<=' }
    ],
    date: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'less than', value: '<' },
        { label: 'greater than', value: '>' },
        { label: 'less or equal', value: '<=' }
    ],
    email: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'contain', value: 'contain' },
        { label: 'does not contain', value: 'not_contain' },
        { label: 'start with', value: 'start_with' },
        { label: 'end with', value: 'end_with' }
    ],
    currency: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'less than', value: '<' },
        { label: 'greater than', value: '>' },
        { label: 'less or equal', value: '<=' }
    ],
    number: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'less than', value: '<' },
        { label: 'greater than', value: '>' },
        { label: 'less or equal', value: '<=' }
    ],
    url: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'contain', value: 'contain' },
        { label: 'does not contain', value: 'not_contain' },
        { label: 'start with', value: 'start_with' },
        { label: 'end with', value: 'end_with' }
    ],
    time: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'less than', value: '<' },
        { label: 'greater than', value: '>' },
        { label: 'less or equal', value: '<=' }
    ],
    text: [
        { label: 'equals', value: '=' },
        { label: 'not equal to', value: '!=' },
        { label: 'contain', value: 'contain' },
        { label: 'does not contain', value: 'not_contain' },
        { label: 'start with', value: 'start_with' },
        { label: 'end with', value: 'end_with' }
    ]
};
const mapOperatorType = (type) => {
    let returnType = {};
    if (Object.prototype.hasOwnProperty.call(dataTypeMap, type)) {
        returnType.type = dataTypeMap[type];
    } else {
        returnType.type = 'text';
    }
    returnType.operator = operaterMap[returnType.type];
    return returnType;
};

export { mapOperatorType };
