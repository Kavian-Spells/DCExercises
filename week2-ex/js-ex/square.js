function printSquare(size) {
    var starLine = ""; //declare an empty variable to store your stars
    for(var i = 0; i < size; i++) { //first loop establishes the first row of stars
        starLine = starLine + "*";
}
    for(var i = 0; i < size; i++) { //second loop prints the whole row of stars for the amount that is equal to "size"
        console.log(starLine);
}
}

printSquare(5);