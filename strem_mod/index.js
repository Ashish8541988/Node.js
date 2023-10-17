const http=require("http");
const fs=require("fs");

const server=http.createServer();
server.on('request',(req,res)=>{
//     fs.readFile("input.txt",(err,data)=>{
// if (err) return console.error(err);
// res.end(data.toString());
//     })
// const stream=fs.createReadStream('input.txt');
// stream.on('data ',(chunkdata)=>{
//     res.write(chunkdata);
// })
// stream.on("end",()=>{
//     res.end()
// })
// stream.on("error",(err)=>{
//     res.end("file not found")
// })
//3rd method
const rstream=fs.createReadStream('input.txt');
rstream.pipe(res);
})

server.listen(8000,'127.0.0.1');