import { createProduct, updateProduct, getProducts, getOneProduct, deleteProduct } from "../controllers/Products.js";
import { ProductValidator } from "../validators/products.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.post('/', /* verifyMiddle.verifyToken, */ ProductValidator.createProductValidator, createProduct);

router.put('/:id',/*  verifyMiddle.verifyToken, */ ProductValidator.updateProductValidator, updateProduct);

router.delete('/:id', /* verifyMiddle.verifyToken, */ deleteProduct);
 
export default router;