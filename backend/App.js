const express=require("express");
const app=express();
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const cors =require("cors");
require("dotenv").config();
const route =require("./Router/router")

mongoose.connect(process.env.MDB_Connection).then(()=>{
    console.log("mongoDB connected succefully");
})
.catch(()=>{console.log("mongodb is not connected error")})

app.use(cors());



let port =process.env.PORT ||8080;


app.use("/res",route);



app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})