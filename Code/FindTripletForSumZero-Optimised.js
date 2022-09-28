function findTriplet(arr, n) {
    let found = false;
    for (let i = 0; i < n - 1; i++) {
        let s = [];
        for (let j = i + 1; j < n; j++) {
            let checkNo = -(arr[i] + arr[j]);
            if(s.includes(checkNo)){
                console.log([arr[i], arr[j], checkNo]);
                found = true;
            }
            else{
                s.push(arr[j]);
            }
        }
    }
    if (!found) {
        console.log("No Match Found !!!");
    }
}

let arr = [1, -1, 2, 0, 3, 1, -2];
//         0   1  2  3  4  5   6      
findTriplet(arr, arr.length);

// TC : O(n^2)
// SC : O(n) => O(1)