// function square(n) {
//     return n*n
// };

// function sumOfSquare(a, b) {
//     let val1 = square(a);
//     let val2 = square(b);
    
//     return val1 + val2;
// }

// console.log(sumOfSquare(1,3));

// Call Back came into the picture now.

function square(n) {
    return n*n
};

function cube(n) {
    return n*n*n;
};

// cb ==> callBack
function sumOfSomething(a, b, cb) {
    let val1 = cb(a);
    let val2 = cb(b);
    
    return val1 + val2;
}

console.log(sumOfSomething(1,3, cube)); // 28
console.log(sumOfSomething(1,3, square)); // 10
