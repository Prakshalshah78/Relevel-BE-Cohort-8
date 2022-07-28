
// find no of digits => 3
// fetch every ind digits and multiply it with no of digits times => 1*1*1 + 5*5*5 + 3*3*3


var numOriginal = 153;
var num = numOriginal; //0

var noOfDigits = 0;

while(num!=0){ //153!=0 , 15!=0, 1!=0 , 0!=0
  noOfDigits++; // 1 // 2 // 3
  num = parseInt(num/10); // 15 // 1 // 0
}

// doing your process
// comparing it with original no 
console.log(noOfDigits);



