

const http=require("http");















const myServer=http.createServer((req,res)=>{
    console.log("Hello")
    res.end("Recevied")
})


myServer.listen(8000,(err,data)=>{
    console.log("server started")
})