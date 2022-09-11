// // function generateBinaryStrings(n){
// //   if(n<=0){
// //     return;
// //   }

// //   let str = Array(n);

// //   str[0] = '0';
// //   generateBinaryStrings(n, str+1);

// //   // generate all binary strings 
// //   // start with 1
// //   str[0] = '1';
// //   generateStrings(n, str+1, 1);
// // }

// // function generateStrings(n, str){
// //   if(n == str.length){
// //     str[str.length] = '\0';
// //   }

// //   else if(str[str.length-1] == '1'){
// //     str[str.length] = '0'
// //   }
// // }

// // 10

// function allBinaryStrings(str,num){
//   let len = str.length;
//   if(len == num){
//     console.log(str);
//     return;
//   }
//   else if(str[len -1] == "1"){
//     allBinaryStrings(str+'0', num);
//   }
//   else{
//     allBinaryStrings(str+'0', num);
//     allBinaryStrings(str+'1', num)
//   }
// }

// function printStrings(num){
//   let fStr = "";
//   fStr = fStr + "0";
//   allBinaryStrings(fStr,num);
//   fStr = "1";
//   allBinaryStrings(fStr, num)
// }

// let n = 4;
// printStrings(4)

let arr = [23,34,54]
let newArr = [...arr]
newArr[3]= 45
console.log(arr,newArr)