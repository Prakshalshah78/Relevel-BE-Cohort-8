var a = 5; //base
var b = 8; //exponent
var result = 1; // 5*5*5

if(b==0){
    result =1
}

while(b > 0){
    //logic
    result = result * a;
    b--;
    console.log(b)
}

console.log(result)