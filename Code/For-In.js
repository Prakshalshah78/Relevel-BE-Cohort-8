// var obj1 = {
//     "name": "Rahul",
//     "age": 23,
//     "isStudent": false
// }

// // let arr = ["abc",1, true]

// console.log(obj1.name)

// for(key in obj1){
//     console.log(obj1[key])
// }

// for(val of arr){
//     console.log(val)
// }

// // for(val in obj1){
// //     console.log(obj1[val])
// // }

// for(val in arr){
//     console.log(arr[val])
// }


// var obj1 = {
//     "name": "abc",
//     "age": 24,
//     "isStudent": true
// }

// var obj2 = {
//     "name":"abc",
//     "age": 24,
//     "isStudent": true
// }

// function isSame(obj1, obj2){
//     var isValid = true;
//     for(item in obj1){
//         if(obj1[item]!=obj2[item]){
//             isValid = false;
//         }
//     }
//     return isValid;
// }

// console.log(isSame(obj1,obj2));

var rahulData = {
    "name": "abc",
    "age": 26,
    "isStudent": true
}

var rahulData = [1,2,3,4]

for(var key in rahulData){
    // (key == 'age') && 
    // ((rahulData[key] > 25) ? console.log(true) : console.log(false))
    console.log(rahulData[key])
}

for(var item of rahulData){
    console.log(item)
}

// (cond) && task