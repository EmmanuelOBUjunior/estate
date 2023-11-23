import express from 'express';
import mongoose from 'mongoose';

mongoose.connect()

const app = express();

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})