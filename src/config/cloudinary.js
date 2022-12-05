import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET,
    secure: true
  });

  export async function uploadImage(filePath){
    return await cloudinary.uploader.upload(filePath,{
      folder: 'replit'
    })
  }

 /*  export const uploadFile = async (filePath, folder = 'Project 0') => {
    let result = {};
    try{

      result = await cloudinary.uploader.upload(filePath,{
        folder: folder
      });
      return {success: true , url: result.url};
    }catch(error){
      return {success: false, message: error}
    } 
  }*/
