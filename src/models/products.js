import mongoose from "mongoose";

// name, price, description, url_image, category, stock
const productSchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true

  }/* ,
  url_image: {
    type: String,
    required: true

  } */,
  category: {
    type: String,
    required: true

  },
  stock: {
    type: Number,
    required: true

  }
});

export default mongoose.model("Product", productSchema);