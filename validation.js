// Validation
const Joi = require('joi');

const registerValidation = () => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };
     return Joi.validate(data, schema );

    };

// Login Validation
const loginValidation = () => {
    const schema = {
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };
     return Joi.validate(data, schema );

    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;