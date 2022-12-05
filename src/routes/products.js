import { ProductController } from "../controllers/Products.js";
import { ProductValidator } from "../validators/products.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', ProductController.getProducts);

router.get('/:id', ProductController.getOneProduct);

router.post('/', verifyMiddle.verifyToken, ProductValidator.createProductValidator, ProductController.createProduct);

router.put('/:id', verifyMiddle.verifyToken, ProductValidator.updateProductValidator, ProductController.updateProduct);

router.delete('/:id', verifyMiddle.verifyToken, ProductController.deleteProduct);
 
export default router;