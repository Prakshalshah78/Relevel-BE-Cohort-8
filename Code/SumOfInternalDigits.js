

var numOriginal = 16; // 3 digit > 3digit
var num = numOriginal; 

var noOfDigits = 0;
var sum = 0;

while(num!=0){ 
  noOfDigits++; 
  num = parseInt(num/10); 
}

num = numOriginal;

if(noOfDigits > 2){ // 3>2
    do{
        //do your logic
        num = parseInt(num / 10); // omit my last digit //32
        lastDigit = num % 10; // 2
        sum = sum + lastDigit; // 0 + 2 => 2
    }
    while(parseInt(num/100)!==0) // make sure that new no is of > 2 digits 
}
else{
    sum = -1;
}

console.log(`Inner sum of no ${numOriginal} is ${sum}`);

// 231/100=> 2