let arr = [1,2,3,4];

arr.forEach((val) => {
    console.log(val*val);
});


// Other way to do this.
let arr2 = [2,3,4,5,6]

let squareOfArr = (arr2) => {
    console.log(arr2*arr2);
}

arr2.forEach(squareOfArr)