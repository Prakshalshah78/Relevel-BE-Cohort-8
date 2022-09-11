function findSteps(n){
    // Base Case
    // n = 1 => 1
    // n = 2 => 2
    // n = 3 => 1+2

    if(n == 1 ||n == 0){
        return 1;
    }

    else if(n == 2){
        return 2;
    }

    else{
        // Recursion call
        // 1 , 2 , 3 
        // n = 10 => 1 => n-1
        let a = findSteps(n-1); // findSteps(2) // 2
        let b = findSteps(n-2); // findSteps(1) // 1
        let c = findSteps(n-3); // findSteps(0) // 1
        // self work
        return a + b + c; // 4
    }
}

console.log(findSteps(3));