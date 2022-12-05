import { productSchema } from "../models/products.js";
import { uploadImage } from "../config/cloudinary.js";

export const getProductsService = async () => {
   
   const data = await productSchema.find({}); 

   return data;

}

export const getOneProductService = async (id) => {
   
    const data = await productSchema.find({_id : id}); 
 
    return data;
 
 }

export const createProductService = async (body) => {  
    
    const {name, price, description, url_image, category, stock} = body;

    const result = null;
    
    if(req.files?.image){
        result = await uploadImage(req.files.url_image.tempFilePath);
    }
    
    const data = await productSchema.create({_id, id}, { $set:{
        name,
        price,
        description,
        url_image: {
            public_id: result.public_id,
            secure_url: result.secure_url
        },
        category,
        stock
    }});
   
    return data;
}

export const updateProductService = async (id, name, price, description, url_image, category, stock) => {  
    const result = null;

    if(req.files?.image){
        result = await uploadImage(req.files.url_image.tempFilePath);
    }

    const data = await productSchema.update({_id, id}, { $set: { 
        name,
        price,
        description,
        url_image: {
            public_id: result.public_id,
            secure_url: result.secure_url
        },
        category,
        stock
     }});
   
    return data;
}

export const deleteProductService = async (id) => {
   
    const data = await productSchema.delete({_id : id}); 
 
    return data;
 
 }