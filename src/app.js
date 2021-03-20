const express = require("express");
const app = express();
const path = require("path");
const hbs =  require("hbs");
const { json } = require("express");
require("./db/conn");
const Volunteer = require("./models/Volunteers");
const Ngo = require("./models/Ngos");
const port =process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/loginv",(req,res)=>{
    res.render("loginv");
});
app.get("/loginn",(req,res)=>{
    res.render("loginn");
});

app.get("/ngos",(req,res)=>{
    res.render("ngos");
});

app.get("/volunteer",(req,res)=>{
    res.render("volunteer");
});
app.get("/aboutus",(req,res)=>{
    res.render("aboutus");
});
app.get("/contactus",(req,res)=>{
    res.render("contactus");
});
app.get("/trial1",(req,res)=>{
    res.render("trial1");
});
app.get("/timeline",(req,res)=>{
    res.render("timeline");
});

app.get("/volunteer_us",(req,res)=>{
    res.render("volunteer_us");
});

app.post("/ngos",async(req,res)=>{
   try {
       const registerEmployee = new Ngo({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           pass:req.body.pass,
           add:req.body.add
           
       })
       const registerngo = await registerEmployee.save();
       res.status(201).redirect("/volunteer_us");
   } catch (error) {
       res.status(400).send(error);
   }
});
app.post("/volunteer",async(req,res)=>{
   try {
       const registerEmployee = new Volunteer({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           pass:req.body.pass,
           add:req.body.add,
           state:req.body.state,
           city:req.body.city
           
       })
       const registered = await registerEmployee.save();
       res.status(201).redirect("/volunteer_us");
   } catch (error) {
       res.status(400).send(error);
   }
});
app.post("/loginv",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const useremail1=await Volunteer.findOne({email:email});
        if (useremail1.pass===password ){
            res.status(201).redirect("/volunteer_us");
        }else{
            res.send("Try again");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});
app.post("/loginn",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const useremail2=await Ngo.findOne({email:email});
        if (useremail2.pass===password ){
            res.status(201).redirect("/volunteer_us");
        }else{
            res.send("Try again");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port ,()=>{
    console.log(`Server is Running at port no ${port}`);
});
