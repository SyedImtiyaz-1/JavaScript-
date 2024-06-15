function sum(num1, num2, fnToCall){
    let total = num1+num2;
    fnToCall(total);
}

function displayLine(data){
    console.log("The total of the numbers is --> " + data)
}

// let fun1ans = sum(1,2);
// displayLine(fun1ans);

const fun1ans = sum(1,2,displayLine);