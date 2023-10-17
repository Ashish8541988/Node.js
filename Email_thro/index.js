const express=require("express");
const Mail = require("nodemailer/lib/mailer");
const sendMail=require("./controller/sendMail");
const app=express();


app.get("/",(req, res)=>{
    res.send("Connection sucessful");

})

app.get("/sendMail",sendMail)

const start =async()=>{
try {
    app.listen(5000 ,()=>{
console.log("Server start at port 5000");
    })
} catch (error) {
    console.log("port not connected");
}
}
start()