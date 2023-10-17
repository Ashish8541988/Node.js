const http=require("http");
const fs=require("fs");
const requests=require("requests")




const homefile=fs.readFileSync("Home.html","utf-8");

const replaceData=(tempval,orignal)=>{
let temperature=tempval.replace("{%temp%}",orignal.main.temp)
 temperature=temperature.replace("{%maxtemp%}",orignal.main.temp_max)
 temperature=temperature.replace("{%mintemp%}",orignal.main.temp_min)

return temperature;
}










const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=507402821603e181d0e828b8099962d4").on("data",
        (chunk)=>{
            const objdata=JSON.parse(chunk);
            const arrdata=[objdata];
            const realdata=arrdata.map((val)=>replaceData(homefile,val)).join("")
                 
                res.write(realdata);
                
           
        })
        .on("error",(err)=>{
            if (err){return console.log("connection failed")}
            console.log("end");

        })
    }
})
    
server.listen(8000,"127.0.0.1", ()=>{
    console.log("listenig at port 8000")
})