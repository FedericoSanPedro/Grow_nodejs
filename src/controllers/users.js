import { matchedData } from "express-validator";
import User  from "../models/users.js";
import { uploadImage } from "../config/cloudinary.js"; 

export const getUsers = async (req, res) => {
  try {
    const user = await User.find({}); 

  res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

}

export const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); 

  if(!user){
    return res.status(404).json({
      message: "User no exist."
    })
  }
 
  return res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createUser = async (req, res) => {  
    
  try{
    const {email, password, full_name} = req.body;

    const user = new User({
      email,
      password,
      full_name
    })
  
    if(req.files?.url_image){
      const result = await uploadImage(req.files.url_image.tempFilePath);
      user.url_image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
    }
  
    await user.save();
  
    res.json(user);
  }catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
  
}

export const updateUser = async (req, res) => {

    try {
      const { id } = req.params;
 
  const user = await User.findByIdAndUpdate(id, req.body,{
    new: true
  });
  res.json(user);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
}


export const deleteUser = async (req, res) => {
  try {
    
  const user = await User.findByIdAndDelete(req.params.id); 

  res.json(user);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
