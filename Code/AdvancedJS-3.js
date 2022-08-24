// let obj = { //JS Obj
//     name : "Aneesh",
//     age : 23,
//     add : (a,b) => {
//         console.log(a+b);
//     }
// }

// obj.add(1,2)

// JS Obj => can contain a func
// JSON => you can't

// const data = {
//     "name" : "John",
//     "age" : 22,
//     "class" : ["Javascript", "HTML"]
// }
// console.log(data["name"])
// console.log(data.class[0])

// const data1 = {
//     name : "John",
//     age : 22,
//     class : ["Javascript", "HTML"]
// }
// console.log(data["name"])
// console.log(data.class[0])

// const students = {
//     "name" : "Relevel",
//     "batch" : 2022,
//     "student" : {
//         "Name" : "Raj",
//         "subject" : ["Javascript", "html", "css"]
//     }
// }

// console.log(students.student.subject[0])


// const json = "{'name' : 'Jeff', 'age' : 22}"

// // you need to convert in you JS Obj

// console.log(JSON.parse(json))

const json = '{"name" : "Jeff", "age" : 22}'

// you need to convert in you JS Obj

console.log(JSON.parse(json))


const obj = { 
    add: (a,b) => {
        return a+b;
    },
    name: "Jeff",
    age: 22,
    "isStudent" : false
};

// convert JS Obj to JSON

console.log(JSON.stringify(obj))









