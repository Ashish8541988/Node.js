const EventEmitter=require("events");
const event =new EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("Ashish")
// })
// event.emit("sayMyName")
event.on("sayMyName",(cs,msg)=>{
    console.log(`satus code is ${cs} and the is ${msg}`)
})
event.emit("sayMyName" ,200,"OK")