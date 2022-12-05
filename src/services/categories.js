import { CategorySchema } from "../models/categories.js";

export const getCategoryService = async () => {
   
   const data = await CategorySchema.find({}); 

   return data;

}

export const getOneCategoryService = async (id) => {
   
    const data = await CategorySchema.find({_id : id}); 
 
    return data;
 
 }

export const createCategoryService = async (body) => {  
    
    const data = await CategorySchema.create(body);
   
    return data;
}

export const updateCategoryService = async (id, name, description) => {  
    
    const data = await CategorySchema.update({_id, id}, { $set: { name, description }});
   
    return data;
}

export const deleteCategoryService = async (id) => {
   
    const data = await CategorySchema.delete({_id : id}); 
 
    return data;
 
 }