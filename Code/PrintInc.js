function PrintInc(n){
    //Base Condition
    if(n==1){
        console.log(1);
        return;
    }
    
    // Recursive call
    PrintInc(n-1);

    // Self Work
    console.log(n)
}

PrintInc(7);