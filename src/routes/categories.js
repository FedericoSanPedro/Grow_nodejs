import { getCategories, createCategory, updateCategory, deleteCategory, getOneCategory } from "../controllers/categories.js";
import { CategoryValidator } from "../validators/categories.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getCategories);

router.get('/:id', getOneCategory);

router.post('/', /* verifyMiddle.verifyToken, CategoryValidator.createCategoryValidator, */ createCategory);

router.put('/:id',/*  verifyMiddle.verifyToken, CategoryValidator.updateCategoryValidator, */ updateCategory);

router.delete('/:id', /* verifyMiddle.verifyToken, */ deleteCategory);
 
export default router;