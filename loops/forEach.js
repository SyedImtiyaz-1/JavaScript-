// Using for loop
let arr = [1,2,3,4];
   
    for(i=0;i<arr.length; i++){
        let temp = arr[i]*arr[i];
        console.log("Square of "+temp);
    }


// Doing using for each 
let arr1 = [1,2,3,4];
    arr1.forEach((temp) => {
    console.log("The square of " + temp*temp);
    })