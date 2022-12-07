import Category  from "../models/categories.js";

export const getCategories = async (req, res) => {
  try {
    const category = await Category.find({}); 

  res.json(category);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

}

export const getOneCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id); 

  if(!category){
    return res.status(404).json({
      message: "Category no exist."
    })
  }
 
  return res.json(category);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

// name, description
export const createCategory = async (req, res) => {  
    
  try{
    const {name, description} = req.body;

    const category = new Category({
      name,
      description
    })
  
    await category.save()
  
    res.json(category)
  }catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
  
}

export const updateCategory = async (req, res) => {

    try {
      const { id } = req.params;
 
  const category = await Category.findByIdAndUpdate(id, req.body,{
    new: true
  });
  res.json(category);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
}


export const deleteCategory = async (req, res) => {
  try {
    
  const category = await Category.findByIdAndDelete(req.params.id); 

  res.json(category);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
