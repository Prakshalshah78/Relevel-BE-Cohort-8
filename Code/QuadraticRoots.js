let a = 1, b = 5, c = 1;

let res = b*b-4*a*c;

if(res > 0){
  let rootRes = Math.pow(res,0.5);
  let root1 = (-b + rootRes) / (2*a);
  let root2 = (-b - rootRes) / (2*a);
  console.log("roots are ",root1,root2);
}

else if(res == 0){
  let root1 = -b / (2*a)
  console.log("root is", root1)
}

else{
  console.log("no real roots are present ")
}