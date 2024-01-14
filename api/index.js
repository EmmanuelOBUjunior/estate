import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';


dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connection established successfully");
}).catch((err)=>{
    console.log("Error connecting to Mongo ",err);
});

//Initialize express server
const app = express();
//Accept json response
app.use(express.json());
app.use(cookieParser())

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})

//User Route
app.use("/api/user", userRouter)
//Auth Route
app.use("/api/auth", authRouter)


//Middleware
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


