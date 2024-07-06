const fs = require("fs");

fs.readFile("../functions/a.txt", "utf-8", function(err, data){
    console.log(err)
    console.log(data)
});

console.log("done")