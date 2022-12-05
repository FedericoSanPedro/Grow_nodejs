import { check } from "express-validator";
import { handleValidators } from "../helpers/handleValidators.js";

const OrderDValidator = {};

OrderDValidator.createOrderDValidator = [
  check("order_id").optional().isInt(),
  check("product_id").optional().isInt(),
  check("price").optional().isFloat(),
  check("quantity").optional().isInt(),
  (req, res, next) => handleValidators.validateResults(req, res, next)
];

OrderDValidator.updateOrderDValidator = [
  check("order_id").optional().isInt(),
  check("product_id").optional().isInt(),
  check("price").optional().isFloat(),
  check("quantity").optional().isInt(),
    (req, res, next) => handleValidators.validateResults(req, res, next)
];

export { OrderDValidator };