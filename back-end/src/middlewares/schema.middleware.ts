import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";


export function schemaValidator(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const errors = validation.error.details.map((error) => error.message);
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }
    next();
  }
}