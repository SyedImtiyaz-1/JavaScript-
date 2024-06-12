// printing arrays 
let arr = [10,20,30,40,50];
console.log(arr)
console.log("The length of the array is : " + arr.length); // output - 5

let arr2 = ["IITB", "IITD", "IITKGP", "IITM"];
let arr3 = ["IITM", "IITK"];
console.log(arr2)
console.log("The length of the array is : " + arr2.length); // output - 4

console.log(arr[4]); // output - 50
console.log(arr[5]); // output - undefined

// indexOf() method
console.log(arr.indexOf(20)) // 1
console.log(arr.indexOf(20)) // -1 (because array not found.)

console.log(arr.push(60))
console.log(arr)
console.log(arr.pop()) 
console.log(arr)
console.log(arr.toString()) // it will print arr in string format.

// concat arrays 
console.log(arr2.concat(arr3, arr)) //concatinating all the mentioned arrays.

// shift() method in js

let names = ["aman", "bushra", "imtiyaz", "bitsPilani"]
 let val = names.shift()
 console.log(`Deleted --> ${val}`);
 
//  unshift() in js
console.log(arr.unshift(40,50))
console.log(arr) // using unshift we can push new elements in our array.

// slice() method in js
// Important point in slicing --> Whenever you are slicing the array that time there is 1 parameter but we have to pass 2 values (startIndex, EndIndex) Now, Starting index will going to count here but the end index will not count. So here the ending index is `non-inclusive`.
// Example of slice() :
let sliceArr = ["aman", "bushra", "ayanu", "shahid", "tasmiya", "insha"]

console.log(sliceArr.slice(0,4))

// splice(), this use to add, remove and replace element inside the array. Example --> splice(startIndex, delCount, newElement)
// we are taking example of the above sliceArr :

console.log(sliceArr.splice(2,2)) // showing which element changed.

console.log(sliceArr) //showing the exact element left in the array.

// Some more array methods

// Map Array Method (it is very similiar to forEach )
arr.map((val)=>{
    console.log(val);
})

// printing new Array
let newArr = arr.map((val)=>{
    return val;
})
console.log(newArr)

// Reduce Method in JS
// reduce() method is used to reduce the array to a single value. It takes two arguments, first is the callback(accumulator) function and second is the currentValue

let arrR = [1,2,3,4,5];

const output = arrR.reduce((res, curr)=>{
    return res + curr;
})

console.log(output);

let arrR2 = [1,2,3,4,5];

const output2 = arrR2.reduce((res, curr)=>{
    return res >  curr ? res : curr ;
})

console.log(output2);