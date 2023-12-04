import User from '../models/user.model.js'
import bcryptjs from "bcryptjs"
import { errorHandler } from '../utils/error.js';

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
        const validPassword = await bcryptjs.compareSync(password, validUser.password)
    }catch(err){
        next(err)
    }

}