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

console.log(MergeTwoSortedArrays([2,4,5,6],[1,3,4,8]))

// res = [1,2,3,4,4,5,6,]
// a1 = [2,4,5,6,8,9,10]
// a2 = [1,3,4]