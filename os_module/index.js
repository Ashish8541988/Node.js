const os=require("os");
// console.log(os.arch())
// const free_memory=os.freemem();
// console.log(`${free_memory/1024/1024}`)
// const total_memory=os.totalmem();
// console.log(`${total_memory/1024/1024/1024}`)
const host_name=os.hostname();
console.log(host_name)
const platform=os.platform();
console.log(platform)