function insertionSort(arr){
    let n = arr.length;
    for(i=1;i<n;i++){
        //i=>1 , j => i-1 // sorted region would be ended
        let elem = arr[i]; // 4
        let j = i-1; // 0
        while(j>=0 && elem < arr[j] ){ // 4<5
            arr[j+1] = arr[j]; // [arr[1] = arr[0]]
            j--;
        }
        arr[j+1] = elem;
        
    }
    return arr;
}
