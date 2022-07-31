
// find no of digits => 3
// fetch every ind digits and multiply it with no of digits times => 1*1*1 + 5*5*5 + 3*3*3

function checkArmstrong(number){ //153
  var numOriginal = number; // 153
  var digits = 0;
  while(number > 0){ // 153>0 , 15>0, 1>0
    digits = digits +1; //1 //2 //3
    number = parseInt(number/10) //15 //1 //0
  }
  number = numOriginal; //153
  var sum = 0;

  for(item = 0 ; item < digits ; item++){ //0<3 //1<3 //2<3 //3<3
    var digit = number % 10; // 153%10=> 3, 15%10=>5 //1%10=>1
    sum = sum + Math.pow(digit,digits); 
    // Math.pow(3,3) // 0+27=> 27
    // Math.pow(5,3) // 27+125=> 152
    // Math.pow(1,3) // 152+1=> 153
    number = parseInt(number/10); // 15 //1 //0
  }

  if(sum == numOriginal){ //153===153
    console.log(`${numOriginal} is an armstrong number`);
  }
  else{
    console.log(`${numOriginal} is not an armstrong number`);
  }

}

checkArmstrong(153);
checkArmstrong(1634);
checkArmstrong(1004);

