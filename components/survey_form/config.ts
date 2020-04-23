export const layout = {
    labelCol: { span: 16 },
    colon: true,
    wrapperCol: { span: 16 },
};

export const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const initialValues = {
    'phone_options': '86'
};
