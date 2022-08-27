let arr = [1,2,3];
function subArray(){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            for(let k = i; k <= j; k++){
                console.log(arr[k] + " ");
            }
            console.log("\n")
        }
    }
}

subArray()