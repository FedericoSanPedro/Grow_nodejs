import { CategoryController } from "../controllers/categories.js";
import { CategoryValidator } from "../validators/categories.js";
import { verifyMiddle } from "../middleware/verify.js";
import { Router } from "express"; 

const router = Router();

router.get('/', CategoryController.getCategory);

router.get('/:id', CategoryController.getOneCategory);

router.post('/', verifyMiddle.verifyToken, CategoryValidator.createCategoryValidator, CategoryController.createCategory);

router.put('/:id', verifyMiddle.verifyToken, CategoryValidator.updateCategoryValidator, CategoryController.updateCategory);

router.delete('/:id', verifyMiddle.verifyToken, CategoryController.deleteCategory);
 
export default router;