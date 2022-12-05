import { matchedData } from "express-validator";
import { getOrdersService, getOneOrderService, createOrderService, updateOrderService, deleteOrderService } from "../services/orders.js";
import { response } from "express";

const OrderController = {};

OrderController.getOrders = (req, res) => {
  getOrdersService()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));c

}

OrderController.getOneOrder = (req, res) => {

    const { id } = req.params;
    getOneOrderService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));

}

OrderController.createOrder = (req, res) => {  
      
    const order = orderSchema(req.body);

    createOrderService(order)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

OrderController.updateOrder = async (req, res) => {

    const { id } = req.params;
  const { ammount} = req.body;
  updateOrderService(id, ammount)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

OrderController.deleteOrder = async (req, res) => {
    const { id } = req.params;
    deleteOrderService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}

export { OrderController };