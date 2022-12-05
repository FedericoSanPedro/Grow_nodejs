/* import { CategoryController } from "../controllers/categories.js";
import { CategoryValidator } from "../validators/categories.js";
import { verifyMiddle } from "../middleware/verify.js"; */
import { Router } from "express"; 

const categoryRouter = Router();

categoryRouter.get('/', (req,res) => res.send("Hello")/* CategoryController.getCategory */);
/* 
categoryRouter.get('/:id', CategoryController.getOneCategory);

categoryRouter.post('/', verifyMiddle.verifyToken, CategoryValidator.createCategoryValidator, CategoryController.createCategory);

categoryRouter.put('/:id', verifyMiddle.verifyToken, CategoryValidator.updateCategoryValidator, CategoryController.updateCategory);

categoryRouter.delete('/:id', verifyMiddle.verifyToken, CategoryController.deleteCategory); */
 
export default categoryRouter;