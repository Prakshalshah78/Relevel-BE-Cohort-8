function isPrime(number){ //17
    var sqrtNo = Math.floor(Math.sqrt(number));
    var prime = number != 1; //true
    for(var i =2 ; i< sqrtNo+1; i++){
        if(number % i == 0){
            prime = false;
            break;
        }
    }
    return prime
}

console.log(isPrime(Math.floor(17.2)))