import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const UserValidator = {};

UserValidator.createUserValidator = [
  check("email").optional().isEmail(),
  check("password").optional().notEmpty().isString(),
  check("full_name").optional().notEmpty().isLength({ min: 5, max: 50 }),
  check("role").exists().isIn(['admin', 'customer']),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

UserValidator.updateUserValidator = [
  check("email").optional().isEmail(),
  check("password").optional().notEmpty(),
  check("full_name").optional().notEmpty().isLength({ min: 5, max: 50 }),
  check("role").exists().isIn(['admin', 'customer']),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

UserValidator.loginValidator = [
  check("email").isEmail(),
  check("password").exists().notEmpty(),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];


export { UserValidator };