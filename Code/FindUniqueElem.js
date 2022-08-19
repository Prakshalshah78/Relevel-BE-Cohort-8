function uniqueElements(mat){
    let max = 0;
    let flag = 0;

    //find max elem
    for(let i = 0; i< mat.length; i++){
        for(let j = 0; j < mat[0].length;j++){
            if(mat[i][j] > max)
            {
                max = mat[i][j];
            }
        }
    }
    //frequency of every elements

    let newArray = Array(max+1).fill(0);
    for(let i = 0; i< mat.length; i++){
        for(let j = 0; j < mat[0].length;j++){
            newArray[mat[i][j]]++;
        }
    }
    console.log(newArray);

    //console unique elements
    for(let i = 0 ; i<newArray.length;i++){
        if(newArray[i]==1){
            console.log(i+" ");
            flag = 1;
        }
    }

    if(flag == 0){
        console.log(`No unique elements found`)
    }
}

let mat=[
        [11,2,2,20],
        [5,16,20,7],
        [1,13,5,16],
        [6,7,18,15]
]

uniqueElements(mat)
