/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let arr = [1,2,3,4];
    let largest = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargestElement())

module.exports = findLargestElement;