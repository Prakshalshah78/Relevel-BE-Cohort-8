// var temp;
// var nthFib = 0;
// var prev = 0;
// var curr = 1;
// var output = "";
// var n = 7;

// if(n == 0)
//     nthFib = 0;

// else if(n == 1)
//     nthFib = 1;

// else{
//     for(i = 2; i <=n; i++){
//         temp = prev;
//         prev = curr;
//         output = `${output + curr} `;
//         curr = temp + prev;
//     }
// }

// console.log(`Fibonacci Series for ${n} is 0 ${output}`);

// nthFib = curr;
// console.log(nthFib)

// ################# Fibonacci with Recursion ###########

function fibSeries(num){
    if(num <= 1)
        return num;
    else{
        return fibSeries(num-1) + fibSeries(num-2);
    }
}
// var num = 7;
// for(var i = 0; i< num; i++){
//     console.log(fibSeries(i))
// }
console.log(fibSeries(7))
// 0 1 1 3