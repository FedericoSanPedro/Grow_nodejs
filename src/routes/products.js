import { createProduct, updateProduct, getProducts, getOneProduct, deleteProduct } from "../controllers/Products.js";
import { ProductValidator } from "../validators/products.js";
import { verifyToken } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.post('/', verifyToken, ProductValidator.createProductValidator, createProduct);

router.put('/:id', verifyToken, ProductValidator.updateProductValidator, updateProduct);

router.delete('/:id', verifyToken, deleteProduct);
 
export default router;