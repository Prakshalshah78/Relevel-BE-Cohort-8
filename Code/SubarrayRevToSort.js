function checkReverse(arr){
    let len = arr.length;
    if(len == 1)
        return true;
    
    // I will find upto which point your array is incrementing the values 

    for(i = 1; i < len && arr[i] > arr[i-1]; i++);

    if(i == len)
        return true;
    
    console.log(i); // 3

    // I will find upto which point your array is decrementing the values
    let j = i; // 3
    
    while(j<len && arr[j] < arr[j-1]){ // arr[4] < arr[3] // 5 < 5
        if(i > 1 && arr[j] < arr[i-2]){ // arr[4] < arr[1] // 3 < 2
            return false;
        }
        j++; //5
    }
    
    console.log(j);

    if(j == len) // 5==5
        return true;
    
    let k = j; // 7
    if(arr[k] < arr[i-1]) // arr[7] < arr[4] // 45<20
        return false;
    
    while(k>1 && k<len){
        if(arr[k] < arr[k-1]){ // arr[7] < arr[6] // 45 < 8
            return false;
        }
        k++;
    }
    return true;
}


// [4]
let arr = [3,2,1,4,5,6]; //8
//         0 1 2 3 4  5 6  7

//[1,5,3,6]
checkReverse(arr) ? console.log("Yes") : console.log("No");