
const num = "aswqjekhwqehj";

switch(true){
    case num == "aswqjekhwqehj" : //false
        console.log(`${num} is positive`);
        break;
    case (num < 0): 
        console.log(`${num} is negative`);
        break;
    case (num == 0):
        console.log(`${num} is zero`);
        break;
    default:
        console.log(`${num} is not valid`);
}
