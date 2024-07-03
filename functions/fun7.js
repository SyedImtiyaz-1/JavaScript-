// Async and Await

// filesystem rendering using log

// Async Example

const fs = require("fs");

fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("Imtiyaz");

// Here normal log is printing first after that file system data is loading and async is taking time to load the file and read it.

// One More Example -

setTimeout(function timeout1() {
    console.log("Click the button!");
}, 5000);

setTimeout(function timeout2() {
    console.log("Click the button!");
}, 3000);

for(let i = 0; i < 5; i++){
    console.log("For Loop");
}

// Here timeout2 will be consider first as it is taking 3secs also timeout both functions are async.
