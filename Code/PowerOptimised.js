var a = 5, power = 4;
var result = 1;

while(power > 0){
    if(power % 2 != 0){ // odd
        result = result * a;
    }
    a = a * a;
    power = parseInt(power / 2);
    console.log(result);
}