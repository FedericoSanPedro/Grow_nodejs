import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const loginValidator = {};

loginValidator.login = [
  check("email").exists().isEmail(),
  check("password").exists().notEmpty().isString(),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { loginValidator };