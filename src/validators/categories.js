import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const CategoryValidator = {};

CategoryValidator.createCategoryValidator = [
  check("name").optional().notEmpty().isLength({ min: 5, max: 50 }),
  check("description").optional().notEmpty().isLength({ min: 5, max: 200 }),
  (req, res, next) => handleValidators.validateRole('admin',req, res, next),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

CategoryValidator.updateCategoryValidator = [
    check("name").optional().notEmpty().isLength({ min: 5, max: 50 }),
    check("description").optional().notEmpty().isLength({ min: 5, max: 200 }),
    (req, res, next) => handleValidators.validateRole('admin',req, res, next),
    (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { CategoryValidator };