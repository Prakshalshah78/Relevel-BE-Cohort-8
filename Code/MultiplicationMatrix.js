let one = [
   [1,2,3],
   [4,5,6]
  ]
// 2*3

let two=[
     
   [1,2],
   [3,4],
   [5,6]
]
//one[0][0] * two[0][0] + one[0][1] * two[1][0] + one[0][2] * two[2][0]
//3*2
// 1 + 6 + 15

// 2*2

let r1 = one.length; // 2
let c1 = one[0].length; //3 
let r2 = two.length;//3
let c2 = two[0].length;//2

let res = [...Array(r1)].map(elem=>Array(c2));

for(i=0;i<res.length;i++){
    for(j=0;j<res[0].length;j++){
        let sum = 0;
        for(k=0;k<c1;k++){
            sum = sum + one[i][k] * two[k][j]
        }
        res[i][j] = sum;
    }
}

console.log(res)