function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n -1; i++ ){
        let minidx = i;
        var isSwapped = false;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minidx]){
                minidx = j;
                isSwapped = true;
            }
        }
        
        [arr[minidx], arr[i]] = [arr[i], arr[minidx]];
        
        if(!isSwapped){
            break;
        }
        console.log(arr);
    }
    return arr;
}

console.log(selectionSort([4,5,3,2,9]))