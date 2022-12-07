import { createOrder, updateOrder, getOrders, getOneOrder, deleteOrder } from "../controllers/orders.js";
import { OrderValidator } from "../validators/orders.js";
import { verifyToken } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getOrders);

router.get('/:id', getOneOrder);

router.post('/', verifyToken, OrderValidator.createOrderValidator, createOrder);

router.put('/:id', verifyToken, OrderValidator.updateOrderValidator, updateOrder);

router.delete('/:id', verifyToken, deleteOrder);
 
export default router;