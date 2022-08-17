const arr = [   
   [1,1,1,4],
   [2,2,2,4],
   [3,3,3,4]
] // row * col => 3 * 4

// how many rows ? arr.length
// how many cols ? arr[0].length

// 3*4 => 4*3

var ouptut = [...Array(arr[0].length)].map(elem => Array(arr.length));

for(row = 0; row < arr.length; row++){
    for(col = 0; col < arr[0].length; col++){
        ouptut[col][row] = arr[row][col]
    }
}
console.log(ouptut)