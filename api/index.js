import express from 'express';

const app = express();

app.listen(3001, ()=>{
    console.log('Server started successfully on port 3001');
})