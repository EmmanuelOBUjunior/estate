import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connection established successfully");
}).catch((err)=>{
    console.log("Error connecting to Mongo",err);
});

const app = express();

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})

