import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const OrderValidator = {};

OrderValidator.createOrderValidator = [
  check("customer_id").optional().notEmpty(),
  check("ammount").optional().notEmpty(),
  check("order_date").optional().notEmpty(),
  check("order_status").optional().notEmpty(),
  (req, res, next) => handleValidators.validateRole('customer',req, res, next),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

OrderValidator.updateOrderValidator = [
    check("customer_id").optional().notEmpty(),
    check("ammount").optional().notEmpty(),
    check("order_date").optional().notEmpty(),
    check("order_status").optional().notEmpty(),
    (req, res, next) => handleValidators.validateRole('customer',req, res, next),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { OrderValidator };