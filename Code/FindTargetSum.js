// let arr = [2,3,4,5,6,7,8];

// function calculate(arr,sum){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i; j < arr.length; j++){
//             if(arr[i]+arr[j] == sum){
//                 result.push({[arr[i]]:arr[j]});
//             }
//         }
//     }
//     return result;
// }

// console.log(calculate(arr,10))

let arr = [2,3,4,5,6,7,8];

function calculate(arr,sum){
    let result = [], return_result = [];
    for(let i = 0; i < arr.length; i++){
        if(result[arr[i]]){
            return_result.push({[result[arr[i]]]: arr[i]})
        }
        else{
            result[sum-arr[i]] = arr[i];
        }
    }
    return return_result;
}

console.log(calculate(arr,10));
