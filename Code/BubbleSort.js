function bubbleSort(arr,k){
    let n = arr.length;
    for(let i =0; i < k; i++){
        var isSwapped = false;
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                // swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
        console.log(arr)
    }
    return arr[n-k];
}

console.log(bubbleSort([5,1,4,2,8],2))

// if any of the iteration is not doing any of the swaps then break the loop and come out of it. 