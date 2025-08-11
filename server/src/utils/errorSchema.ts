import Joi from 'joi';

export const postSchema = Joi.object({
	post: Joi.object({
		title: Joi.string().required(),
		body: Joi.string().required(),
	}).required(),
});
