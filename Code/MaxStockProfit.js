let arr = [100,180,260,310,40,535,695];
//          0   1   2   3   4  5   6

function findMaxProfit(arr){
    let len = arr.length;
    let profit = 0;
    for(day=1; day<len; day++){
        if(arr[day] > arr[day-1]){
            profit = profit + arr[day] - arr[day-1];
        }
    }
    return profit;
}

console.log(findMaxProfit(arr))