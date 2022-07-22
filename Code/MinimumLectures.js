let m = 50, n = 30;

let minLecToSit = Math.ceil(0.75*m);
console.log("min lecs are ", minLecToSit)
//n < minLecToSit
if(n < minLecToSit){
  console.log("Total no of more sessions are", minLecToSit-n)
}

else{
  console.log("No extra sessions needed");
}