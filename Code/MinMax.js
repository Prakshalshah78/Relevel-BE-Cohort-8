let arr = [3,1,31,60]
function findMinMax(arr){
    let minAndMax = new Array();
    let len = arr.length;
    let itt = 0;
    //arr having 1 value
    if(len == 1){
        minAndMax.min = arr[0];
        minAndMax.max = arr[0];
        return minAndMax;
    }
    //arr having 2 values and more than 2 values
    if(arr[0] > arr[1]){ //3 > 1
        minAndMax.min = arr[1]; // min => 1
        minAndMax.max = arr[0]; // max => 3
    }
    else{
        minAndMax.min = arr[0];
        minAndMax.max = arr[1];
    }
    //more than 2 values
    for(itt=2; itt<len; itt++){
        if(arr[itt] < minAndMax.min){
            minAndMax.min = arr[itt];
        }
        else if(arr[itt] > minAndMax.max){
            minAndMax.max = arr[itt];
        }
        // (arr[itt] < minAndMax.min) ? minAndMax.min = arr[itt] : 
        // (arr[itt] > minAndMax.max) && (minAndMax.max = arr[itt])
    }
    return minAndMax;
}
console.log(findMinMax(arr))

// let a = 2, b = 3;
// if(a == 2){
//     console.log(a)
// }
// else{
//     console.log(b);
// }
// (a==2) ? console.log(a) : console.log(b);

// if(a == 2){
//     console.log(a)
// }
// let a = 2;
// (a==2)&&console.log(a)