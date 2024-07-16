const path = require("path");

const filePath = "Users/johndoe/Documents/example.txt";

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));