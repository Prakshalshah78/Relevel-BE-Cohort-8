function waveMatrix(mat){
    for(col = 0; col < mat[0].length; col++){
        if(col % 2 == 0){ //even
            // top to down
            for(row = 0; row < mat.length; row++){
                console.log(mat[row][col])
            }
        }
        else{ // odd
            // bottom up
            for(row = mat.length-1;row >= 0 ; row--){
                console.log(mat[row][col])
            }
        }
    }
}

let mat = [ 
           [1,2,3,4],
           [4,5,6,5],
           [7,8,9,6]
        ]

waveMatrix(mat);