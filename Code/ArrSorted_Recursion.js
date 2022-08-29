function isSorted(arr,i){
    // Base Condition
    if(i == arr.length-1){
        return true;
    }
    // Recursive call
    let res = isSorted(arr,i+1);

    // Self work
    if(res && arr[i] < arr[i+1]){
        return true;
    }
    else{
        return false;
    }
}

console.log(isSorted([1,2,3,4,5],0))