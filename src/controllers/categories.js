import { matchedData } from "express-validator";
import { getCategoryService, getOneCategoryService, createCategoryService, updateCategoryService, deleteCategoryService } from "../services/categories.js";

const CategoryController = {};

CategoryController.getCategory = (req, res) => {
  getCategoryService()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));c

}

CategoryController.getOneCategory = (req, res) => {

    const { id } = req.params;
    getOneCategoryService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));

}

CategoryController.createCategory = (req, res) => {  
      
    const category = categorySchema(req.body);
    createCategoryService(category)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

// name, description
CategoryController.updateCategory = async (req, res) => {

    const { id } = req.params;
  const { name, description } = req.body;
  updateCategoryService(id, name, description)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}


CategoryController.deleteCategory = async (req, res) => {
    const { id } = req.params;
    deleteCategoryService(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}

export { CategoryController };