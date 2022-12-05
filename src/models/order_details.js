import mongoose from "mongoose";

// order_id, product_id, price, quantity
const Order_DetailSchema = mongoose.Schema({
    order_id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

export { Order_DetailSchema };