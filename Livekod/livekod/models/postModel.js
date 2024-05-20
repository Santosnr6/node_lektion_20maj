import Joi from 'joi';

const postSchema = Joi.object({
    author : Joi.string().alphanum().min(3).required(),
    content : Joi.string().min(10).required() 
});

export default postSchema;