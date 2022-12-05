import { orderSchema } from "../models/orders.js";
import { userSchema } from "../models/users.js";

export const getOrdersService = async () => {
   
   const data = await orderSchema.find({}); 

   return data;

}

export const getOneOrderService = async (id) => {
   
    const data = await orderSchema.find({_id : id}); 
 
    return data;
 
 }

export const createOrderService = async (body) => {  
    
    const user = await userSchema.find({_id : id}); 
    const data = await orderSchema.create(body);
   
    return data;
}

export const updateOrderService = async (id, ammount) => {  
    
    const data = await orderSchema.update({_id, id}, { $set: { ammount }});
   
    return data;
}

export const deleteOrderService = async (id) => {
   
    const data = await orderSchema.delete({_id : id}); 
 
    return data;
 
 }