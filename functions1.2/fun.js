function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function calculateSum(a, b, fn) {
    let val1 = fn(a);
    let val2 = fn(b);

    return val1 + val2;
}

let finalVal = calculateSum(1,2,square);
console.log(finalVal); //5

// same we can do it for the cube fun()