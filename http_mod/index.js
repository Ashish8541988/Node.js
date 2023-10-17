const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from the other side")
    }
    else if(req.url=="/about"){
        res.end("Hello from the about side")
    }
    else{
        res.writeHead(404 , {"content-type":"text/html"})
        res.end("<h1> 404 error The page not found<h1/>")
    }


})


server.listen(8000,"127.0.0.1", ()=>{
    console.log("listenig at port 8000")
})