function unique(arr){
    let ans = arr[0];
    for(let i = 1; i < arr.length; i++){
        ans = ans ^ arr[i];
    }
    return ans;
}

let arr = [7,3,5,4,5,3,4]; // 7
console.log(unique(arr))