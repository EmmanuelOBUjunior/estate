import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connection established successfully");
})

const app = express();

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})