function QuickSelect_Median(arr) { // 7,3,5,4,10
    let len = arr.length;//5
    let halfLength = parseInt(len / 2); //2
    if (len % 2 != 0) {
        return QuickSelect(arr,halfLength);//(arr,2)
    }
    else{
        return (QuickSelect(arr,halfLength-1)+ QuickSelect(arr,halfLength))/2;
    }
}

function QuickSelect(arr,k){
    if(arr.length == 1){
        return arr[0];
    }
    else{
        let pivot = arr[0];
        let lows = arr.filter((e) => e < pivot);
        let highs = arr.filter((e) => e > pivot);

        if(k < lows.length){
            return QuickSelect(lows,k)
        }
        else if(k<lows.length+1){
            return pivot;
        }
        else{
            return QuickSelect(highs,k-lows.length-1);
        }
    }
}

console.log(QuickSelect_Median([7,3,5,4,10]));