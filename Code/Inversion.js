let inv = 0;
let arr = [3,5,6,9,1,2,7,8];
let n = arr.length;

for(let i = 0; i < n; i++){
    for(let j = i+1;j < n; j++){
        if(arr[i]>arr[j] && i<j){
            inv++;
        }
    }
}
console.log(inv)