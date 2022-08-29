function fibo(n){ // 3 => 2 + 1  ======== 2

    if(n==0 || n==1){
        return n;
    }

    // recursive call
    let res1 = fibo(n-1); // fibo(2) => fibo(1)
    let res2 = fibo(n-2); // fibo(1) 

    // self work
    let res = res1 + res2;
    return res;
}

console.log(fibo(3))