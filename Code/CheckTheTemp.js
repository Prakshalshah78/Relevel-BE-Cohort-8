var temp = 19;
var raining = true;

// if((temp >= 20 && temp <= 25) && raining)
//     console.log("go out in the park");

// else if ((temp >= 18 && temp <= 20) && raining)
//     console.log("be in a play school");

// else 
//     console.log("go home")

// check the temp => checkTheTemp

var checkTheTemp = function(temp, raining){
    if((temp >= 20 && temp <= 25) && raining)
        console.log("go out in the park");

    else if ((temp >= 18 && temp <= 20) && raining)
        console.log("be in a play school");

    else 
        console.log("go home")
}
checkTheTemp(19, true);