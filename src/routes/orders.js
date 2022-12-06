import { createOrder, updateOrder, getOrders, getOneOrder, deleteOrder } from "../controllers/orders.js";
import { OrderValidator } from "../validators/orders.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getOrders);

router.get('/:id', getOneOrder);

router.post('/', /* verifyMiddle.verifyToken, */ OrderValidator.createOrderValidator, createOrder);

router.put('/:id', /* verifyMiddle.verifyToken, */ OrderValidator.updateOrderValidator, updateOrder);

router.delete('/:id', /* verifyMiddle.verifyToken, */ deleteOrder);
 
export default router;