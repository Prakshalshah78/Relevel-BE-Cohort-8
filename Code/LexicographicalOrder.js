
let CreatedArray = (n) => {
    const nums = [];
    for(num = 1; num <= n; num++){
        nums.push(num);
    }
    return nums;
}

let lexOrder = (nums) => nums.sort()

let printValues = (nums) => {
    let str = "";
    for(num = 0; num < nums.length; num++){
        str+= nums[num]+" ";
    }
    console.log(str)
}

let n = 22;
let resArr = CreatedArray(n);
lexOrder(resArr)
printValues(resArr);