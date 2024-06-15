function calTime() {
  let n = parseInt(prompt("Enter Number: "));
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += n;
  }
  return a;
}

const beforeTime = new Date();
const result = calTime();
const afterTime = new Date();
console.log(afterTime - beforeTime);
