// JSON.parse()
// JSON.stringify()

const data1 = {
    "name": "Aman",
    "age": 21
}

const data2 = '{"name":"Aman","age":21}'

const ans1 = console.log(JSON.stringify(data1))
const ans2 = console.log(JSON.parse(data2))

console.log(ans1)

console.log(ans2)