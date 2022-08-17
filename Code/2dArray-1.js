// const sudhakarData = {
//     firstName : "Sudhakar",
//     age:32,
//     occupation : "Student"
// }

// const sudhanshuData = {
//     firstName : "Sudhanshu",
//     age:23,
//     occupation : "Software Engineer"
// }

// const abhishekData = {
//     firstName : "Abhishek",
//     age:24,
//     occupation : "Software Engineer"
// }

// // store objects in array and fetch name
// // print each firstname

// const studentDatabase = [sudhakarData,sudhanshuData,abhishekData];
// //console.log(studentDatabase)

// studentDatabase.push({
//     firstName : "Srihari",
//     age: 23,
//     occupation : "Student"
// });

// for(i=0;i<studentDatabase.length;i++){
//     console.log(studentDatabase[i].firstName)
// }


// const sudhakarData = ["Sudhakar", 21, "Student"];
// const sudhanshuData = ["Sudhanshu", 22, "Student"];
// const abhishekData = ["Abhishek", 23, "Software Engineer"];

const studentDatabase = [ 
    ["Sudhakar", 21, "Student","Indian"], 
//      0         1    2          3

//            0
    ["Sudhanshu", 22, "Student", "Canadian"],
//      0          1     2          3
//              1
    ["Abhishek", 23, "Software Engineer", "American"]
//     0          1      2
//            2
];

console.log(studentDatabase[1][1][3])
// console.log(studentDatabase[0].length)
// console.log(studentDatabase[1].length)
// console.log(studentDatabase[2].length)

// for(i=0;i<studentDatabase.length;i++){
//     for(j=0;j<studentDatabase[i].length;j++){
//         console.log(studentDatabase[i][j])
//     }
// }
//studentDatabase[1][4]

// studentDatabase[0][0]
// studentDatabase[1][0]
// studentDatabase[2][0]



