import { UserController } from "../controllers/users.js";
import { UserValidator } from "../validators/users.js"; 
import { Router } from "express"; 

const router = Router();

router.get('/', UserController.getUsers);

router.get('/:id', UserController.getOneUser);

router.post('/', UserValidator.createUserValidator, UserController.createUser);

router.put('/:id', UserValidator.updateUserValidator, UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

export default router;