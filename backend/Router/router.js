const express =require("express");
const route =express.Router();
const controller =require("../Contoller/controller")


route.post("/login",controller.LoginPage);
route.post("/signUp", controller.signUpPage);




module.exports=route