// ############# Factorial Using Recurssion ###############

// function fact(n){ 
//     //A function which is calling itself => Recurssion
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n * fact(n-1)
//     }
// }

// console.log(fact(5))

// ################ Factorial without Recurssion #####################

var num = 5;

if(num < 0){
    console.log("Negative Factorial can not be done");
}

else if (num == 0){
    console.log("Factorial of 0 is 1.")
}

else{
    var fact = 1;
    for(i = 1 ; i <= num ; i++){
        fact = fact * i; // 5! = > 1*2*3*4*5
    }
    console.log(`Factorial of ${num} is ${fact}`)
}



// Recursion

// function fact(n){
//     //logic
//     if(n==0)
//         return 1;
//     else{
//         return n * fact(n-1);
//     }
// }

// console.log(fact(5));

// // 7! => 7 * 6 * 5*4*3*2*1

