// convert [1,2,3,4,5] --> [2,4,5,6,8] 
// Code : Map in js 

let arr = [1,2,3,4,5];

let newArr = [];

for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
}

console.log(newArr); 