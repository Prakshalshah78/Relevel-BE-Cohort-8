function findTriplet(arr, n) {
    let found = false;
    arr.sort((a, b) => a - b);
    for (let i = 0; i <= n; i++) {
        let l = i + 1;
        let r = n - 1;
        let x = arr[i];
        while (l <= r) {
            if (x + arr[l] + arr[r] == 0) {
                console.log(x, arr[l], arr[r]);
                l++;
                r--;
                found = true;
            }
            else if (x + arr[l] + arr[r] < 0) 
                l++;
            else
                r--;
        }
    }
    if (!found)
        console.log("No Match Found !!!");
}

let arr = [1, -1, 2, 0, 3, 2, -2];
let n = arr.length;
findTriplet(arr, n)

// TC : O(n^2)
// SC : O(1)
