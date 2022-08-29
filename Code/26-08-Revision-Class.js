// 'use strict';
// no = 3;
// console.log(no)

// 'use strict';
// console.log("this is my strict mode");
// x = 20;
// console.log(x)


// myNo = 9;
// console.log(myNo);

// function hi(){
//   'use strict';
//  	address = "Bang";  
//   console.log(address)
// }

// hi();

// 1. Undeclared variable is not allowed.

// 'use strict'
// a =9;

// // 2. Undeclared objects is also not allowed

// 'use strict';
// person = {name:"Hi",age:23}

// // 3. Delete of an obj is also not allowed

// 'use strict';
// let person = {name:"Hi",age:23}
// delete person;

// 4. Duplication of any param is not allowed
// 'use strict';
// function hi(a,a){
//     console.log("hi")
// }
// hi();

// 5. Assignment to non-writable property is prohibited

// 'use strict';
// let obj = {};
// Object.preventExtensions(obj);

// obj.newValue = "new value"
// console.log(obj)

// 6. Octal literals are not allowed in strict mode.

let a = 1101;
console.log(Number(a).toString(16))
console.log(a)
// hexadecimal => hex - 6 + decima;l - 10 => 16
// hex => 6