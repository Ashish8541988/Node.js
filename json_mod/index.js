const BioData={
    name:"Ashish",
    age:"22",
    branch:"ECE"
}
const fs = require("fs");

// console.log(BioData.name)
const jsonData=JSON.stringify(BioData);//we can't acess json data as jsonData.name or jsonData.age//convert object to json data

// console.log(jsonData)
// const ObjData=JSON.parse(jsonData);
// console.log(ObjData);
// console.log(ObjData.name)
fs.writeFile("json.json",jsonData,(err)=>{
    console.log("Done")
})
fs.readFile("json.json","utf-8",(err , data)=>{
// console.log(data)
const orignalData=JSON.parse(data);//converting json data to object data
console.log(orignalData)
})