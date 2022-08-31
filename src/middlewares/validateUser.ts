import { userSchema } from "../schemas/userSchema";
import { Request, Response, NextFunction } from "express";

export async function validateUser(req: Request, res: Response, next: NextFunction) {
  const userData = req.body;
  const validation = userSchema.validate(userData);

  if (validation.error) {
    return res.status(422).send(validation.error.details.map(detail => detail.message))
  };

  res.locals.userData = userData;
  next();
};