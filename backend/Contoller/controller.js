const signUpModel =require("../model/login_signup")

const LoginPage =async(req,res)=>{
    console.log(req.body);
    res.send("okkkkkkk");
}


const signUpPage=async(req,res)=>{
    console.log(req.body);
    res.send("okk");
}


module.exports={
    LoginPage,
    signUpPage
}