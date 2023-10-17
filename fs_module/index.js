const fs = require("fs");
//creating a new file
// fs.FileSync("file.text","Welcome to my new journay towards backends","utf8")//utf8 for emojie in the text so that we don't get error
// fs.appendFileSync("file.txt","   let's fun!") //adding data without delete the privous data
// const data=fs.readFileSync('file.txt')
// console.log(data)//this give buffer data as a input or we can say it give binary data as a output
// const orginal_data=data.toString();
// console.log(orginal_data)
// fs.mkdir("ABC_folder")//command for creating a folder
// fs.unlinkSync("file.txt")//command for deleting a file
// fs.rmdirSync("ABC_folder")//command for deleting a folder
// fs.writeFile("read.txt","This file for callback function ",(err)=>{
// console.log("file is created")
// console.log(err)
// })
// fs.appendFile('read.txt',"   Update data with the help of ayschnors function","utf-8",(err,data)=>{
//     console.log(err)
// })
// fs.readFile('read.txt','utf-8',(err,data)=>{
//     console.log(data)
//     console.log(err)
// })//file read using ascynronas method
fs.mkdirSync("os_module");