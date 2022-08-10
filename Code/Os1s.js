let arr = [0,1,0,1,1,0,0,1];
let i = 0, j = arr.length-1;
//i < j
while(i<j){
    let currentLeftElement = arr[i];
    let currentRightElement = arr[j];    
    // in i => 0 , need to do i++
    // in j => 1 , need to do j==
    // in i => 1, in j => 0, swap, i++, j--
    if(currentLeftElement == 0){
        i++;
    }
    if(currentRightElement == 1){
        j--;
    }
    if(currentLeftElement == 1 && currentRightElement == 0){
       arr[i] = currentRightElement;
       arr[j] = currentLeftElement;
       i++;
       j--;
    }
}
console.log(arr);