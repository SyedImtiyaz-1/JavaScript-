let student = {
    name: "Imtiyaz",
    age: 21,
    cgpa: 9.80,
    isPass: true
};

for(let i in student){
    console.log(i); // this will give us the key.
    i++;
}

for(let i in student){
    console.log(student[i]); // thi will give us the value.
    i++;
}

for(let i in student){
    console.log(`${i}: ${student[i]}`); // thi will give us key and value both.
    i++;
}