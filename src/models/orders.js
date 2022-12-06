import mongoose from "mongoose";

// customer_id, ammount, order_date, order_status
const orderSchema = mongoose.Schema({
    customer_id: {
    type: Number,
    required: true,
  },
  ammount: {
    type: Number,
    required: true
  },
  order_date: {
    type: Date,
    required: true

  },
  order_status: {
    type: String,
    required: true

  }
});

export default mongoose.model("Order", orderSchema);