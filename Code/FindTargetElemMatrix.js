function searchElem(mat,target){
    let row = mat.length;
    let col = mat[0].length;
    let i = 0;
    let j = col-1;

    while(i<row && j>=0){
        if(mat[i][j]==target){
            return true;
        }
        else{
            if(mat[i][j]<target){
                i+=1;
            }
            else if(mat[i][j]>target){
                j-=1;
            }
        }
    }
    return false;
}

let target = 80;

let mat = [
    [10,20,30,40],
    [11,21,36,43],
    [25,29,39,50],
    [50,60,70,80]
]

console.log(searchElem(mat,target))