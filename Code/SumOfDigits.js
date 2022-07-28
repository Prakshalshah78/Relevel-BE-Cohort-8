var num = 1244;
var output = 0;

while(num != 0){
    output = output + num % 10;
    num = parseInt(num / 10);
}

console.log(output);