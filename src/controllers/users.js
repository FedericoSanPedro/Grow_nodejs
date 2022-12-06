import { matchedData } from "express-validator";
import User  from "../models/users.js";
import { uploadImage } from "../config/cloudinary.js"; 

export const getUsers = async (req, res) => {
  const data = await User.find({}); 

  res.json(data);

}

export const getOneUser = async (req, res) => {
  const data = await User.findById(req.params.id); 
 
  res.json(data);
}

export const createUser = async (req, res) => {  
      
    const {email, password, full_name} = req.body;

  const user = new User({
    email,
    password,
    full_name
  })

  if(req.files?.url_image){
    const result = await uploadImage(req.files.url_image.tempFilePath)
  }

  await user.save();

  res.json(user);
}

export const updateUser = async (req, res) => {

    const { id } = req.params;
 
  const data = await User.findByIdAndUpdate(id, req.body,{
    new: true
  });
  res.json(data);
}


export const deleteUser = async (req, res) => {

  const data = await User.findByIdAndDelete(req.params.id); 

  res.json(data);
}
