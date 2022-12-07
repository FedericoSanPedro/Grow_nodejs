import { login } from "../controllers/login.js";
import { loginValidator } from "../validators/login.js";
import { Router } from "express"; 

const router = Router();

router.post('/', loginValidator.login, login);
 
export default router;