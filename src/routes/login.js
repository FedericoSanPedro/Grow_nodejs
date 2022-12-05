import { loginRouter } from "../controllers/login.js";
import { loginValidator } from "../validators/login.js";
import { Router } from "express"; 

const router = Router();

router.post('/', loginValidator.login, loginRouter.login);
 
export default router;