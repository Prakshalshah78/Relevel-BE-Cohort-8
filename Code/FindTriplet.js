function findTriplet(arr,target){
    let l, r;
    arr.sort((a,b) => a-b);

    for(let i = 0; i< arr.length; i++){
        l = i+1;
        r = arr.length-1;

        while(l<r){
            if(arr[i] + arr[l] + arr[r] == target){
                console.log(arr[i], arr[l], arr[r]);
                return true;
            }
            else if(arr[i] + arr[l] + arr[r] < target){
                l++;
            }
            else{
                r--;
            }
        }
    }
    return false;
}

let arr = [1,2,5,6,7,8,3];
findTriplet(arr,8)