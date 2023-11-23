import express from 'express';


const router = express.Router();

router.get("/test", (req,res)=>{
    res.send("Router working")
})

export default router;