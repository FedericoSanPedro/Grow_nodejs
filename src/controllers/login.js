import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User  from "../models/users.js";

export const login = async (req,res) => {

    const user = await User.findOne({email: req.body.email});

    if(!user){
      return res.status(404).json({
        message: "User no exist."
      })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if(!(user && validPassword)){
        res.status(401).json({
            error: "invalid user or password"
        })
    }

    const token = jwt.sign({
            id: user._id,
            email: user.email,
            full_name: user.full_name,
            role: user.role,
    },process.env.SECRET)

    res.header('auth-token', token).json({
        data: {token}
    })
}
