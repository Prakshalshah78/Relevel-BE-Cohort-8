var fNum = 12;
var sNum = 16;
var result;

for(let i = 1; i <= fNum && i <= sNum; i++){
    if(fNum % i == 0 && sNum % i == 0){
        result = i;
    }
}

console.log(result);
