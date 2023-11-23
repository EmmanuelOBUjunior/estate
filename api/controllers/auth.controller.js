import User from '../models/user.model.js'

export const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    const hashedPassword = 
    const newUser = new User({username, email, password});
    try {
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (err) {
        res.status(500).json(err)
    }
}