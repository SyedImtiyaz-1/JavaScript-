// Calculate sum of 'n' numbers
let i;
let temp = 0; // Initialization is important to set the dataType here.
let n = 5;
// let temp; <-- This will going to give us NaN

for(i=1;i<=n;i++){
   temp = temp + i;
}

console.log(temp);

