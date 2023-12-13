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
    },
    avatar:{
        type: String,
        default: "https://imgs.search.brave.com/mDdtZ12xiGTjupVmFywXaqmw7taeD-L12YCXsD02hPQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzQzLzQ1/LzM2MF9GXzEwNzQz/NDUxMV9pYXJGMno4/OGM2RHM2QWxndHdv/dEhTQWt0V0NkWU9u/Ny5qcGc"
    }
}, {timeStamps: true})

const User = mongoose.model("User", userScehema)

export default User;