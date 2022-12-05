import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const ProductValidator = {};

ProductValidator.createProductValidator = [
  check("name").optional().notEmpty().isLength({min: 5,max: 40}),
  check("price").optional().notEmpty(),
  check("description").optional().notEmpty().isLength({max: 100}),
  check("category").optional().notEmpty(),
  check("stock").optional().notEmpty(),
  (req, res, next) => handleValidators.validateRole('admin',req, res, next),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

ProductValidator.updateProductValidator = [
    check("name").optional().notEmpty().isLength({min: 5,max: 100}),
    check("price").optional().notEmpty(),
    check("description").optional().notEmpty().isLength({max: 100}),
    check("category").optional().notEmpty(),
    check("stock").optional().notEmpty(),
    (req, res, next) => handleValidators.validateRole('admin',req, res, next),
    (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { ProductValidator };