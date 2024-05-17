// This will not make the string Upper Case because we didn't created a new variable for upper case method !!

let name = "Imtiyaz"
name.toUpperCase();
console.log(name);

// This will make str upper case because now we created a new variable forn that.
let name1 = "Imtiyaz"
let temp = name1.toUpperCase();
console.log(temp);

let name2 = "       Imtiyaz        "
console.log(name2.trim()) //this will remove the front and back white spaces.