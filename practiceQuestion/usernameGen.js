// Username Generator using prompt or input 

let input = "Syed Imtiyaz Ali"
let str = input.split(" ").join("").toLowerCase(); // this will remove spaces btwn the string
console.log(`@${str}${str.length}`);

// Output - @syedimtiyazali14