    let mat = [
        [1,2,3],
        [2,3,4],
        [5,6,7],
        [9,4,8]
    ]

    let col_sum=[];

    for(col=0; col<mat[0].length;col++){
        let sum = 0;
        for(row=0;row<mat.length;row++){
            sum += mat[row][col];
        }
        col_sum.push(sum)
    }

    console.log(col_sum)