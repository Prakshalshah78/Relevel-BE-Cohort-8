var a = 12;
var b = 16;

var multiple = a > b ? a : b; // 16

while(true){
    if(multiple % a ==0 && multiple % b == 0){
        break;
    }
    multiple ++;
}

console.log(multiple)