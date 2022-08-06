// var str = "Hiiii All";
// //         012345678        
// console.log(str[1]) // by index value [index] i

// console.log(str.charAt(1)) // return you the char at that particular position 

// 1. Literal way
// var person = {
//     name : "Srihari",
//     age : 23,
//     siblings: ["Rahul","Sudhanshu", "Sudhakar"],
//     address: {
//         city: "HYD",
//         country: "IND"
//     },
//     false: true
// }

// console.log(person.address.country, person.name )


//2. Construtral way


// function person(name,age,siblings,isStudent, address){
//     this.nm = name;
//     this.age = age;
//     this.siblings= siblings;
//     this.isStudent = isStudent; 
//     this.address = address;
// }

// var person1 = new person("Abhishek",23,["Rahul", "Sudhakar"], true);
// var person2 = new person("Srihari",21,["abc", "qwe"], false);

// console.log(person1)


// var profile = {
//     name : "Srihari",
//     address : {
//         city: "HYD"
//     },
//     salary:300
// }

// console.log(profile)

// //immutable 

// Object.freeze(profile.salary)

// profile.name = "Sudhanshu"; // mutable
// profile.salary = 3000; 

// console.log(profile)
// console.log(Object.isFrozen(profile))

//Freeze Obj => no longer change the obj 
// freezing an object prevents new property being added to it
// modify, delete not allowed 

// var profile = {
//     name : "Srihari",
//     address : {
//         city: "HYD"
//     },
//     salary:300
// }

// Object.seal(profile)
// console.log(Object.isSealed(profile))
// profile.name = "Rahul" // modify
// console.log(profile)
// profile.age = 24;
// console.log(profile) // can not added
// delete profile.salary
// console.log(profile) // can not be deleted
// profile.salary = 2400;
// console.log(profile)



// var profile = {
//     name : "Srihari",
//     address : {
//         city: "HYD"
//     },
//     salary:300
// }
// console.log(Object.isExtensible(profile))
// console.log(profile)
// Object.preventExtensions(profile)
// console.log(Object.isExtensible(profile))
// profile.name="Rahul" //modify
// console.log(profile)
// profile.age = 24; // extend => not allowed
// console.log(profile) 
// delete profile.name // delete => allow
// console.log(profile)
// profile.name = "abc"
// console.log(profile) 


// IMPPPPPPPPPP

// 1. Map method : 

// let arr = [5,1,2,3,6]; // [10,2,4,6,12]

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function add5(x){
//     return x+5;
// }

// function mul5(x){
//     return x*5;
// }

// let output = arr.map(x=> x*5);

// let doubleOutput = arr.map(double)
// let doubleOutput1 = arr.map(function double(x){
//     return x*2;
// })
// let doubleOutput3 = arr.map(x=>x*2)


// console.log(doubleOutput,doubleOutput1,doubleOutput3)
// console.log(arr);


// var add = (a,b)=>{
//     return a+b
// }


// 2. Filter

// let arr = [5,1,2,3,6]; // even values => [2,6]

// function getEvenValues(x){
//     return x%2==0;
// }

// var output = arr.filter(getEvenValues);
// var output1 = arr.filter(function getEvenValues(x){
//     return x%2==0;
// });
// var output2 = arr.filter((x)=>{
//     return x%2==0;
// });
// console.log(output,output1,output2)
// console.log(arr)

//3. reduce => 

//let arr = [5,1,3,2,6] //17

// function findSum(arr){
//     let sum = 0;
//     for(let i =0; i< arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// const output = arr.reduce(function(sum,presentValue){
//     sum = sum + presentValue;
//     console.log(incr)
//     return sum;
// },0)

// console.log(output)

// pass function which will do your job
// this function will iterate to each and every array elements
// acc - accumulator => it will add or accumulate the result after each iteration
// just as sum
// curr - current value


//console.log(findSum(arr))

// [5,1,3,2,6] => max value  => 6


let arr = [5,1,3,2,6] //17

function findMax(arr){
    let max = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let output = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0)

console.log(output)