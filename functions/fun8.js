// Promises

const fs = require('fs');

function sdeReadFile() {
    // console.log("Inside Imtiyaz's File")
    return new Promise(function(resolve){
        console.log("Inside Promise")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Before Promise")
            resolve(data);
        })
    })
}

function onDone(data) {
    console.log(data);
} 

var a = sdeReadFile();
a.then(onDone);
// sdeReadFile().then(onDone);