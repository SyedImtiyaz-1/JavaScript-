function numOfVowels1(stri){
    let flag = 0;
    for(let i of stri){
        if(i==="a" ||i==="e" ||i==="i" || i==="o" || i==="u"){
            flag++
        }
    }
    console.log(flag);
}

numOfVowels1("aman") //2


function numOfVowels2(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break; // Once a vowel is found, exit the inner loop
            }
        }
    }
    console.log(count);
}
numOfVowels2("imtiyaz"); // Output: 3

// Doing using arrow function
const numOfVowels3 = (str2) =>{
    let flag2 = 0;
    for(let i of str2){
        if(i==="a" ||i==="e" ||i==="i" || i==="o" || i==="u"){
            flag2++
        }
    }
    return flag2;
}

console.log(numOfVowels3("bushra ali")) //4

