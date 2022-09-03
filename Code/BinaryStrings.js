function binary(n){

    if(n == 1) return 2;
    if(n == 2) return 3;    

    // Recursive call , Self work
    return binary(n-1) + binary(n-2)
}

console.log(binary(5))