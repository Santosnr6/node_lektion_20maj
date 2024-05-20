import Joi from 'joi';

const todoSchema = Joi.object({
    task : Joi.string().regex(/^[a-zA-Z0-9 ]+$/).required()
});

export default todoSchema;