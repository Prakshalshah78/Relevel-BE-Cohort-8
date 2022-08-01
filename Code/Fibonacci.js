var temp;
var nthFib = 0;
var prev = 0;
var curr = 1;
var output = "";
var n = 5;

if(n == 0)
    nthFib = 0;

else if(n == 1)
    nthFib = 1;

else{
    for(i = 2; i <=n; i++){
        temp = prev;
        prev = curr;
        output = `${output + curr} `;
        curr = temp + prev;
    }
}

console.log(`Fibonacci Series for ${n} is 0 ${output}`);

nthFib = curr;
console.log(nthFib)