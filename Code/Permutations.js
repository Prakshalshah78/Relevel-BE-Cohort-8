


function permutation(str,index){ // (abc,0)

    // base case
    if(index == str.length-1){ // 2 == 2
        let br = [];
        br.push([str.charAt(index)]);// [str.charAt(2)]
        return br; //[['c']]
    }

    let res = permutation(str,index+1); //(abc,0) => (abc,1) => (abc,2)
    // already having b //permutation(str,1)  // [['c']]
    // already having b [['c']] => [bc cb]  => res => [["bc", "cb"]]

    // self work
    let mr = []
    for(let i = 0; i < res.length; i++){
        let val = res[i]; // ['c']
        let s = val[0];//c

        for(j = 0; j <= s.length; j++){
            let st = s.substring(0,j)+str.charAt(index)+s.substring(j);
            mr.push([st]);//["bc", "cb"]
        }
    }
    return mr;
}
let str = "abc";
//     012
console.log(permutation(str,0));