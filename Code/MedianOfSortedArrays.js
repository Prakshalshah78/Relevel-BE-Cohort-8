function MergeTwoSortedArrays(a1, a2){
    let res = [];
    let p1 = 0;
    let p2 = 0;
    let k = 0;

    while(p1 < a1.length && p2 < a2.length){
        if(a1[p1] < a2[p2]){
            res[k] = a1[p1];
            p1++;
            k++;
        }
        else{
            res[k] = a2[p2];
            p2++;
            k++;
        }
    }

    if(p1 === a1.length){
        while(p2 != a2.length){
            res[k] = a2[p2];
            k++;
            p2++;
        }
    }
    if(p2 === a2.length){
        while(p1 != a1.length){
            res[k] = a1[p1];
            k++;
            p1++;
        }
    }

    return res;
}

let arr = MergeTwoSortedArrays([1,3,4,7,10,12],[2,3,6,15]);
console.log(arr);

let med;
let n = arr.length;
if(n % 2 == 0){ //even
    med = (arr[n/2] + arr[(n/2)-1])/2;
}
else{
    med = arr[parseInt(n/2)]
}
console.log(`Median is ${med}`);
