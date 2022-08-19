function checkDiagonal(mat){
    for(i=0;i<mat.length;i++){
        for(j=0;j<mat[0].length;j++){
            if(i!=j && mat[i][j] != 0){
                return false;
            }
        }
    }
    return true;
}

let mat = [
    [1,0,0,0],
    [0,2,0,2],
    [0,0,0,0],
    [0,0,0,0]
]

console.log(checkDiagonal(mat))