/*

*
**
***
****
*****

*/ 

// var rows,cols;
// var output = "";
// for(rows = 1; rows <= 5 ; rows++){ //rows = 2
//     for(cols = 1; cols <= rows; cols++){ // cols = 2
//         output = output + "*"; // //"1\n12"
//     }
//     output = output + "\n"; //"1\n22\n"
// }
// console.log(output)


/* 

*****
*****
*****
*****
*****

123
456
789

987
654
321


*/
// var n = 3;
// var output = "";
// var num = n*n;
// for(rows = 0 ; rows < n; rows++){
//     for(cols = 0; cols < n; cols++){
//         output = output + num;
//         num = num - 1;
//     }
//     output = output + "\n";
// }
// console.log(output)

/* 

*****
*   *
*   *
*   *
*****

*/

// var n = 7;
// var output = "";

// for(rows = 0; rows < n; rows++){
//     for(cols = 0; cols < n; cols++){
//         if(rows === 0 || rows === n-1){
//             output = output + "*";
//         }
//         else{ // rows = 1,2,3
//             if(cols === 0 || cols === n-1){ 
//                 output = output + "*";
//             }
//             else{ // cols = 1,2,3
//                 output = output + " "
//             }
//         }
//     }
//     output = output + "\n";
// }
// console.log(output);

/*

    *
   **
  ***
 ****
*****   

*/

// var n = 5;
// var output = "";

// for(rows = 1; rows <= n; rows++){
//     //printing spaces
//     for(spaces = 0; spaces < n-rows; spaces++){
//         output = output + " ";
//     }

//     //printing stars
//     for(stars = 0; stars < rows; stars++){
//         output = output + "*"
//     }
//     output = output + "\n"
// }

// console.log(output)

/*

*
**
* *
*  *
*****

*/

var n = 6;
var output = "";

for(rows = 1; rows <=n ; rows++){
    // printing stars
    for(cols = 0; cols < rows; cols++){
        console.log(rows,cols)
        if(rows == n)
            output = output + "*";
        else{
            if(cols == 0 || cols == rows - 1 ){
                output = output + "*";
            }
            else{
                output = output + " ";
            }
        }
    }
    output = output + "\n"
}
console.log(output)