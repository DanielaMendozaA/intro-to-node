const fs = require("fs");

fs.writeFile("example.txt", "Hello, Word!", (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("File whitten succesfully");
});