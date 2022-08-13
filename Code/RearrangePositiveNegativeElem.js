/*
    For every elem check it with pivot
    elem < pivot => i++, swap arr[i] & arr[j] , j++
    elem > pivot => j++
*/
let arr = [3,-2,5,-4,1,6];

let pivot = 0;
let i = -1;
let j = 0;
let len = arr.length;

function RearrangeElements(arr){
    for(j = 0; j < len; j++){
        if(arr[j] < pivot){
            // incrementing the i
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}

console.log(RearrangeElements(arr))

