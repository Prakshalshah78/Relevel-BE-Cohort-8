//every even index value should be greater than every odd index value

let arr = [1,3,2,2,5]
//         0 1 2 3 4
//         fp      lp
let n = arr.length; //5

arr.sort(); // [1,2,2,3,5]
console.log(arr)

let result = [];

let first = 0, last = n-1;

for(let i = 0; i < n;i++){
    if(i%2==0){
        result[i] = arr[last];
        last--;
    }
    else{
        result[i] = arr[first];
        first++;
    }
}
console.log(result)


