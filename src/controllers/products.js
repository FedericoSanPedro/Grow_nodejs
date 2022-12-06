import { matchedData } from "express-validator";
import Product  from "../models/products.js";
import { uploadImage } from "../config/cloudinary.js"; 

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find({}); 

  res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

}

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); 

  if(!product){
    return res.status(404).json({
      message: "Product no exist."
    })
  }
 
  return res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

// name, price, description, url_image, category
export const createProduct = async (req, res) => {  
    
  try{
    const {name, price, description, category, stock} = req.body;

    const product = new Product({
      name,
      price,
      description,
      category,
      stock
    })
  
   /*  if(req.files?.url_image){
       const result = await uploadImage(req.files.url_image.tempFilePath);
       console.log(result)
     product.url_image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
    } */
  
    await product.save()
  
    res.json(product)
  }catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
  
}

export const updateProduct = async (req, res) => {

    try {
      const { id } = req.params;
 
  const product = await Product.findByIdAndUpdate(id, req.body,{
    new: true
  });
  res.json(product);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
}


export const deleteProduct = async (req, res) => {
  try {
    
  const product = await Product.findByIdAndDelete(req.params.id); 

  res.json(product);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
