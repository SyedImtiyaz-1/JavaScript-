function arr() {
  let arr = [1, 2, 3, 4, 5];
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > last) {
      last = arr[i];
    }
  }
  return last
}

const ans = arr();
console.log(ans);
