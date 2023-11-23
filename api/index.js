import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Admin:<password>@social.8djb6.mongodb.net/estate?retryWrites=true&w=majority")

const app = express();

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})