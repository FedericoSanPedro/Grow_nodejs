import { getUsers, getOneUser, createUser, updateUser, deleteUser } from "../controllers/users.js";
import { UserValidator } from "../validators/users.js"; 
import { Router } from "express"; 

const router = Router();

router.get('/', getUsers);

router.get('/:id', getOneUser);

router.post('/',/*  UserValidator.createUserValidator, */ createUser);

router.put('/:id', /* UserValidator.updateUserValidator, */ updateUser);

router.delete('/:id', deleteUser);

export default router;