import joi from "joi";

export const userSchema = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required()
});