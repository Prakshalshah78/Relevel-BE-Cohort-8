var n = 6;
var output = "";

for(rows = 0; rows < n; rows++){
    //print spaces
    for(spaces = 1; spaces <= n-rows; spaces++){
        output = output + " "
    }

    //print stars
    for(stars=1; stars <= 2*rows+1; stars++){
        output = output + "*";
    }
    output = output + "\n";
}

console.log(output)