function findTriangleSum(mat){
    let i,j;
    let us=0,ls=0;

    for(i=0;i<mat.length;i++){
        for(j=0;j<mat[0].length;j++){
            if(i<=j){
                us+=mat[i][j];
            }
            if(j<=i){
                ls+=mat[i][j];
            }
        }
    }

    console.log(`Upper triangle sum is ${us} and lower triangle sum is ${ls}`)
}

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

findTriangleSum(mat);