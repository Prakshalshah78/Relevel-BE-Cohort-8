let CountWays = (n) => {
    if(n<=2){ // n == 1 => 1 and n == 2 => 2
        return n;
    }
    return CountWays(n-1) + CountWays(n-2);  
}

console.log(`for n = 1, total number of ways = ${CountWays(1)}`);
console.log(`for n = 2, total number of ways = ${CountWays(2)}`);
console.log(`for n = 3, total number of ways = ${CountWays(3)}`);
console.log(`for n = 4, total number of ways = ${CountWays(4)}`);