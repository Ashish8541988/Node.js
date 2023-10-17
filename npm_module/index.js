 const chalk=require("chalk");
 var validator=require("validator");
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello world!'));
let res=validator.isEmail("ashish@gmail.com")
console.log(res)