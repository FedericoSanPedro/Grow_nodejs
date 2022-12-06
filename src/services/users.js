import User  from "../models/users.js";/* 
import { uploadImage } from "../config/cloudinary.js"; */

export const getUsersService = async () => {
   
   const data = await User.find({}); 

   return data;

}

export const getOneUserService = async (id) => {
   
    const data = await User.find({_id : id}); 
 
    return data;
 
 }

 export const getOneUserByEmail = async (email) => {
   
    const data = await User.find({_email : email}); 
 
    return data;
 
 }

export const createUserService = async (body) => {  
    
    const {email, password, full_name, url_image, role} = body;
    
    const result = null;
    
    if(req.files?.image){
        result = await uploadImage(req.files.url_image.tempFilePath);
    }

    const data = await User.create({
        email,
        password,
        full_name,
        url_image: {
            public_id: result.public_id,
            secure_url: result.secure_url
        },
        role
    });

   
    return data;
}

export const updateUserService = async (id, email, password, full_name, url_image) => {  

    const result = null;
    
    if(req.files?.image){
        result = await uploadImage(req.files.url_image.tempFilePath);
    }

    const data = await User.update({_id, id}, { $set: { 
        email,
        password,
        full_name,
        url_image: {
            public_id: result.public_id,
            secure_url: result.secure_url
        }
    }});
   
    return data;
}

export const deleteUserService = async (id) => {
   
    const data = await User.delete({_id : id}); 
 
    return data;
 
 }