import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: "dyh4tj6f8", 
    api_key: "151649449687536", 
    api_secret: "lwouseSzPerAipoWBUCjLXEfO1I",
    secure: true
  });

  export async function uploadImage(filePath){
    return await cloudinary.uploader.upload(filePath,{
      folder: 'folder'
    })
  }
