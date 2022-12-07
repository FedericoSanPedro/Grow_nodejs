import { getCategories, createCategory, updateCategory, deleteCategory, getOneCategory } from "../controllers/categories.js";
import { CategoryValidator } from "../validators/categories.js";
import { verifyToken } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', getCategories);

router.get('/:id', getOneCategory);

router.post('/', verifyToken, CategoryValidator.createCategoryValidator, createCategory);

router.put('/:id', verifyToken, CategoryValidator.updateCategoryValidator, updateCategory);

router.delete('/:id', verifyToken, deleteCategory);
 
export default router;