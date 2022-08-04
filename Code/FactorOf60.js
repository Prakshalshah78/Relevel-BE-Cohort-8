function isDivisibleBy60(num){
    var sum = 0;
    last = false;
    secondLast = false;

    while(num != 0){ // 153=> 3 + 5 + 1=> 9
        i = num % 10;
        num = parseInt(num / 10);

        if(i % 2 == 0 && (i > 0 || last)){ // last === true
            secondLast = true;
        }
        if(i == 0){
            last = true;
        }
        sum = sum + i; // 9
    } // 4 and 5 => last => 0 , second => even
    
    if(sum % 3 == 0 && last && secondLast){
        return 1;
    }
    else{
        return 0;
    }
}

var num = 2340;
console.log(isDivisibleBy60(num))