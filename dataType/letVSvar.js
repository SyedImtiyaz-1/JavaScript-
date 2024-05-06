for(var i = 0 ; i < 5; i++){
    console.log(i); // 0,1,2,3,4
}

console.log("Printing:" + i); // this will print 5 even after it is outside the loop because of (var - local scope)

// ------------------------x------------------------

for(let i = 0 ; i < 5; i++){
    console.log(i); // 0,1,2,3,4
}

console.log(i); // this will print Not Defined because (Let) have block scope.
