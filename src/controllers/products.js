import { matchedData } from "express-validator";
import { getProductsService, getOneProductService, createProductService, updateProductService, deleteProductService } from "../services/products.js";

const ProductController = {};

ProductController.getProducts = (req, res) => {
  getProductsService()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));c

}

ProductController.getOneProduct = (req, res) => {

    const { id } = req.params;
    getOneProductService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));

}

ProductController.createProduct = (req, res) => {  
      
    const product = productSchema(req.body);
    createProductService(product)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}


// name, price, description, url_image, category, stock
ProductController.updateProduct = async (req, res) => {

    const { id } = req.params;
  const { name, price, description, url_image, category, stock} = req.body;
  updateProductService(id, name, price, description, url_image, category, stock)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}


ProductController.deleteProduct = async (req, res) => {
    const { id } = req.params;
    deleteProductService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}

export { ProductController };