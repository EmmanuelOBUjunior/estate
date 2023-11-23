import { timeStamp } from 'console';
import mongoose from 'mongoose';

const userScehema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
}, {timeStamps: true})

export default User = mongoose.model("User", userScehema)