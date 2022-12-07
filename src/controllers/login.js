import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { matchedData } from 'express-validator';
import { getOneUserByEmail } from "../controllers/users.js";

export const login = (req,res) => {
    /* let body = matchedData(req) */
    const {email, password} = req.body

    const user = getOneUserByEmail(email)
    const passwordCorrect = user === null
    ? false
    : bcrypt.compare(password, user.password)

    if(!(user && passwordCorrect)){
        res.status(401).json({
            error: "invalid user or password"
        })
    }

    const userInfo = {
            id: user._id,
            email: user.email,
            password: user.password,
            full_name: user.full_name,
            role: user.role,
    }

    const token = jwt.sign(userInfo, process.env.SECRET)

    res.send({
        id: user._id,
        full_name: user.full_name,
        email: user.email,
        password: user.password,
        role: user.role,
        token

    })
}
