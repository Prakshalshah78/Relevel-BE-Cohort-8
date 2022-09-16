arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'name':'Rithik','salary':650000},{'name':'John','salary':45000},{'name':'Deepak','salary':230000}]

// O/P: Second largest salary holder

function bubbleSort(arr){
    let n = arr.length;
    for(let i =0; i < n-1; i++){
        var isSwapped = false;
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j].salary > arr[j+1].salary){
                // swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

let res = bubbleSort(arr);
let k = 1;
console.log(res[res.length-k].name)

// if any of the iteration is not doing any of the swaps then break the loop and come out of it. 

