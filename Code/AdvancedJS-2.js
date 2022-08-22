// // // const arr = [1,2,3,4,5];

// // // // // [10,2,0,5,6]

// // // // // give me all numbers which are > 3

// // // const res1 = arr.filter(function(item){
// // //     return item > 3; // false true
// // // })
// // // console.log(res);

// // //[4,5]


// // // Map, filter, reduce, sort => they are accepting another function

// // const numbers = [1,2,3,4,5,6];//21 // numbers.length
// // // give me the sum of every element
// // var num = 0
// // const res = numbers.reduce((sum,curr)=>{
// //     return sum+=curr;
// // },0);
// // console.log(res);

// //  ############## Currying ############### //


// const add = (a,b,c) => {
// 	return a+b+c;
// }

// //add(1,2,3);

// const curryAdd = (sum) => {
// 	return (a) => {
//         return (b) => {
//             return (c) => {
//                 return sum(a+b+c);
//             }
//         }
//     }
// }
// const addition = curryAdd(add);

// console.log(addition(1))


// IIFE - Immediately invoked function expression

function printName(name){
    console.log(name);
}

printName("John");

(function (text) {
    console.log(text);
})("John");

(function (text) {
    console.log(text);
})("John");


(function(){

})();

(()=>{

})();






















