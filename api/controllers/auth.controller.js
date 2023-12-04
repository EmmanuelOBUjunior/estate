import User from '../models/user.model.js'
import bcryptjs from "bcryptjs"
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (err) {
        next(err)
    }
}

export const signin = async (res, req, next) =>{
    try{
        const {email, password} = req.body;
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(400, "Invalid Credentials"))
        console.log(validUser.email)
        const validPassword =  bcryptjs.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(400, "Invalid Credentials"));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const {password:pass, ...rest} = validUser 
        res.cookie("access_token", token, {httpOnly:true}).status(200).json(rest)
    }catch(err){
        next(err)
    }

}