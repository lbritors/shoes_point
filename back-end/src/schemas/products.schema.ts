import joi from 'joi';

export const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
  size: joi.string().required(),
  categoriesId: joi.string().required(),
});

export const updateProductSchema = joi.object({
  name: joi.string(),
  price: joi.number(),
  quantity: joi.number(),
  size: joi.string(),
  categoriesId: joi.string(),
});