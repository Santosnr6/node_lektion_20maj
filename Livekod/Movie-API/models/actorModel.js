import Joi from 'joi';

const actorSchema = Joi.object({
    name: Joi.string().required(),
});

export default actorSchema;