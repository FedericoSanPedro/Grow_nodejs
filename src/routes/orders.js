import { OrderController } from "../controllers/orders.js";
import { OrderValidator } from "../validators/orders.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', OrderController.getOrders);

router.get('/:id', OrderController.getOneOrder);

router.post('/', verifyMiddle.verifyToken, OrderValidator.createOrderValidator, OrderController.createOrder);

router.put('/:id', verifyMiddle.verifyToken, OrderValidator.updateOrderValidator, OrderController.updateOrder);

router.delete('/:id', verifyMiddle.verifyToken, OrderController.deleteOrder);
 
export default router;