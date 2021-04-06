function printBox(cols, rows) {
    var completeLine = "";
    var space = "";
    var star = "";
    var spaceLine = "";
   
    for(var i = 0; i < cols; i++) {  // created complete line 
        completeLine = completeLine + "*";
    }
    
    for(var i = 0; i < cols; i++) {    // created a line with spaces 
        if (i == 0 || i == cols-1) {      
            spaceLine = spaceLine + "*";
        }
        else {
            spaceLine = spaceLine + " "; 
        }
}

    for(var j = 0; j < rows; j++) { // printed the complete line followed by the spaced line
        if (j == 0) {
            console.log(completeLine)
            console.log(" ");
        } else if (j == rows-1) {
            console.log(completeLine);
        } else {
            console.log(spaceLine);
            console.log(" ");
        }

    }
    
}

printBox(6,4);