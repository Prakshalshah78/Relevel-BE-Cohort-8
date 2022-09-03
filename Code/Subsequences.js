function PrintSubsequences(arr,index){

    if(index == arr.length - 1){
        let res = [];
        res.push([arr[index]]);
        res.push([]);
        return res;
    }

    // Recursive Call
    let res = PrintSubsequences(arr,index+1); // [3], []

    // self work
    let mr = [];
    for(i = 0; i < res.length; i++){
        mr.push(res[i]);
        let val = [...res[i]];
        val.unshift(arr[index]);
        mr.push(val);
    }
    return mr;
}

console.log(PrintSubsequences([1,2,3],0))