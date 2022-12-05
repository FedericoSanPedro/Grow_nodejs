import mongoose from "mongoose";

// email, password, full_name, url_image, role
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true

  },
  url_image: {
    public_id: String,
    secure_url: String

  },//admin o customer
  role: {
    type: String,
    required: true

  }
});

export { userSchema };