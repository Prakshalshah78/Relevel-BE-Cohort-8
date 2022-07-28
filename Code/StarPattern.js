var rows,cols;
var output = "";
for(rows = 1; rows <= 5 ; rows++){ //rows = 2
    for(cols = 1; cols <= rows; cols++){ // cols = 2
        output = output + cols; // //"1\n12"
    }
    output = output + "\n"; //"1\n22\n"
}
console.log(output)