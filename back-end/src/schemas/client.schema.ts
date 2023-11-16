import joi from 'joi';

export const clientSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  cpf: joi.string().length(11).required(),
});

export const updateClientSchema = joi.object({
  name: joi.string(),
  phone: joi.string(),
  cpf: joi.string().length(11),
});