let arr = [1,2,3,4];

let len = arr.length;

let temp = arr[len - 1];

for(let i = len-1; i >=1; i--){
    arr[i] = arr[i-1]
}
arr[0] = temp;
console.log(temp)
console.log(arr)
