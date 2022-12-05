import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const loginValidator = {};

loginValidator.login = [
  check("email").optional().isEmail(),
  check("password").optional().notEmpty().isString(),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { loginValidator };