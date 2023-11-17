import joi from 'joi'

export const categorySchema = joi.object({
  name: joi.string().required(),
});

export const updateCategorySchema = joi.object({
  name: joi.string(),
});