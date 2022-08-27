function printIntersection(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length;
    let i = 0, j = 0;
    while(i < m && j < n){
        if(arr1[i] < arr2[j]){
            i++;
        }
        else if(arr2[j] > arr1[i]){
            j++;
        }
        else{
            console.log(arr1[i] + " ");
            i++;
            j++;
        }
    }
}

let arr1 = [1,2,3,3,4,5,6]
let arr2 = [3,3,6]

printIntersection(arr1,arr2)