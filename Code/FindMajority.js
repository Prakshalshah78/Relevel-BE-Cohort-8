function findMajority(arr){
    let n = arr.length;
    let maxCount = 0;
    let index = -1;

    for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++){
            if(arr[i] == arr[j])
                count++;
        }

        if(count > maxCount){
            maxCount = count;
            index = i;
        }
    }

    if(maxCount > n / 2){
        console.log(`Element ${arr[index]}`);
    }
    else{
        console.log("No elements are found in majority")
    }
}

let arr = [3,1,3,3,2];
findMajority(arr);