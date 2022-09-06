function countCurrency(amount){
    let notes = [2000,500,200,100,50,20,10,5,1];
    let notesCounter = Array(9).fill(0);
    for(let i = 0; i < 9; i++){
        if(amount >= notes[i]){ // 2000 => 868
            notesCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - notesCounter[i] * notes[i];
        }
    }
    
    // Printing the notes with counter

    for(let i = 0; i < 9; i++){
        if(notesCounter[i] != 0){
            console.log(notes[i], notesCounter[i])
        }
    }
}

countCurrency(868)