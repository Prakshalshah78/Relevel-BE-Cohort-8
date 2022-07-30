var a = 7, b= 13, c= 7;

function isTriangle(a,b,c){
    if(b+c<=a || a+b<=c || a+c<=b){
        return false;
    }
    else{
        return true;
    }
}

console.log(isTriangle(a,b,c));