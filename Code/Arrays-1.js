// let friend1 = "Jitendra";
// let friend2 = "Sudhanshu";
// let friend3 = "Shilpi";
// let friend4 = "Rahul"; 
// let friend5 = "Vivekanand"; 
//100

// ## Naive Approach ##

function greet(friendName){
    let msg = `Hey ${friendName}, you are invited!`;
    return msg;
}

// console.log(greet(friend1));
// console.log(greet(friend2));
// console.log(greet(friend3));
// console.log(greet(friend4));
// console.log(greet(friend5));


// let friendArr = ["Jitendra", "Sudhanshu","Shilpi", "Rahul", "Vivekanand","Sreejet", "Samrat"]; // array
// //                   0           1            2      3             4
// // console.log(friendArr)
// // console.log(friendArr.length)
// // console.log(friendArr[3])

// for(let val = 0; val < friendArr.length; val++){
//     console.log(greet(friendArr[val]))
// }


// let arr = ["Ranjan", 99, true];

// for(let val = 0 ; val < arr.length; val++){
//     console.log(typeof arr[val]);
// }

//console.log(arr);

// ################ Array Declaration #################

// 1. Literal way 

// var arr = [1,2,"hi"];
// console.log(typeof arr);

// 2. Constructral way => new keyword will be used

// var newArr = new Array(); // new Array()
//  console.log(newArr.length);
//  console.log(newArr)
// //  newArr[0] = "hello";
// //  newArr[1] = "hello1";
// //  newArr[2] = "hello2";
//  newArr[3] = "hello3";
//  //newArr[4] = "hello4";
//  console.log(newArr)
 //console.log(newArr[3].length)

 // arr.length , arr[3].length



//  var newArr = new Array(); // new Array()
//  // 0 1 2
//  newArr[99] = "live";
//  console.log(newArr)

//  var newArr1 = [];
//  console.log(newArr1.length) // 0
//  newArr1[99] = "literal";
//  console.log(newArr1.length) // 100
//  newArr1[100] = 100;
//  console.log(newArr1[100]) // 100
//  console.log(newArr1.length) // 101
//  console.log(newArr1) // 99- empty - 100 - literal, 101 - 100
//  console.log(newArr1.length) // 101
//  console.log(newArr1[105])

//let arr1 = ["Tomato", "Rice", "Cabbage", "Lemon"]; // literal way // 1d array
//             0          1      2          3      //4
//let arr = new Array(["Tomato", "Rice", "Cabbage", "Lemon"])
let arr = [["Tomato", "Rice", "Cabbage", "Lemon"],[true,99,"hey"]] //2d array
//             0         1       2        3         0    1  2
//                          0                           1

for(let val = 0 ; val < arr.length; val++){
    for(let inner = 0; inner < arr[val][inner].length; inner++){
        console.log(arr[val][inner]);
    }
}

// console.log(arr[0]); //["Tomato", "Rice", "Cabbage", "Lemon"]
// //                          0       1        2           3

// console.log(arr[0][1])