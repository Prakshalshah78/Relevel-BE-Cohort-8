function LCS(arr){
    let output = 0;
    let count = 1;
    let len = arr.length;
    arr.sort();// [1,1,2,2,3,3,4,7,8]
    let tmpArray=[];

    for(i=1;i<=len;i++){
        if(arr[i] != arr[i-1]){
            tmpArray.push(arr[i-1]);
        }
    }// [1,2,3,4,7,8]
    console.log(tmpArray)
    for(i = 1 ;i< tmpArray.length;i++){
        if(i>0 && tmpArray[i] == tmpArray[i-1]+1){ // 2 == 2 
            count++;
        }
        else{
            count = 1;
        }
        output = Math.max(output,count);
    }
    return output;
}

let arr = [1,2,3,4,1,7,2,3,8]; 
console.log(LCS(arr))
