import connectDB from "./config/db.js";



//configure env
dotenv.config();

//databse config
connectDB();

//rest object




const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("<h>Blogger App<h1>")
})


const PORT= process.env.PORT||5000;


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})