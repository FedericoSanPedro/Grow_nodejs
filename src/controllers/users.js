import { matchedData } from "express-validator";
import { getUsersService, getOneUserService, createUserService, updateUserService, deleteUserService } from "../services/users.js";

const UserController = {};

UserController.getUsers = (req, res) => {
  getUsersService()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));

}

UserController.getOneUser = (req, res) => {

    const { id } = req.params;
    getOneUserService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));

}

UserController.createUser = (req, res) => {  
      
    const user = userSchema(req.body);
    createUserService(user)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

UserController.updateUser = async (req, res) => {

    const { id } = req.params;
  const { email, password, full_name, url_image} = req.body;
  updateUserService(id, email, password, full_name, url_image)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}


UserController.deleteUser = async (req, res) => {
    const { id } = req.params;
    deleteUserService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}

export { UserController };