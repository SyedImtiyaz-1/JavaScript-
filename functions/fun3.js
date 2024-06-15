function calculateArithmetic(a, b, finalFunction) {
  const ans = finalFunction(a, b);
  return ans;
}

function sum(a,b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

const val = calculateArithmetic(1, 2, sum);
console.log(val);

// Call back function 2 parameters and adding one more function in the third parameter.