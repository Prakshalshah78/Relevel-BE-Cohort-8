let arr = [
    [0,0,5],
    [5,0,8],
    [1,0,0]
]
let m =3,n=3;
let counter = 0;
let totalNoOfElements = m*n;

for(i = 0; i < m; i++){
    for(j = 0; j < n; j++){
        if(arr[i][j] == 0){
            counter++;
        }
    }
}

if(counter >= parseInt(totalNoOfElements/2)){
    console.log("Matrix is sparse matrix")
}
else{
    console.log("Matrix is not a sparse matrix")
}


//console.log(arr)