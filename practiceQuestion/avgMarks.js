let stuMarks = [85,97,44,37,76,60];
let avgMarks = 0;

for(let i = 0; i<stuMarks.length; i++){
    avgMarks = avgMarks + stuMarks[i] / stuMarks.length;
}

console.log(`The avg of students marks is : ${avgMarks}`);