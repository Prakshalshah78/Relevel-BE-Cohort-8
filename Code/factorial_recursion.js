function factorial(n){
    // 1. Recursive call
    // 2. Base condition
    // 3. Self work

    // Base case
    if(n == 1){
        return 1;
    }

    // Recursive call
    let res =n*factorial(n-1); // 5*4!=> 4*3! => 3*2 => 2 => 1

    return res*n;
}

console.log(factorial(5));

