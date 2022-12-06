import { matchedData } from "express-validator";
import Order  from "../models/orders.js";

export const getOrders = async (req, res) => {
  try {
    const order = await Order.find({}); 

  res.json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

}

export const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id); 

  if(!order){
    return res.status(404).json({
      message: "Order no exist."
    })
  }
 
  return res.json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

// customer_id, ammount, order_date, order_status
export const createOrder = async (req, res) => {  
    
  try{
    const {customer_id, ammount, order_date, order_status} = req.body;

    const order = new Order({
      customer_id,
      ammount,
      order_date,
      order_status
    })
  
    await order.save()
  
    res.json(order)
  }catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
  
}

export const updateOrder = async (req, res) => {

    try {
      const { id } = req.params;
 
  const order = await Order.findByIdAndUpdate(id, req.body,{
    new: true
  });
  res.json(order);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
}


export const deleteOrder = async (req, res) => {
  try {
    
  const order = await Order.findByIdAndDelete(req.params.id); 

  res.json(order);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
