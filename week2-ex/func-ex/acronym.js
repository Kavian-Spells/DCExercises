function acronym(arr) {
    
    var upper = arr.map(function (e) { //uppercase the entire array
        return e.toUpperCase();
    });

    var wordArray = []; //create a new array to enter the first letter in
    var letterArray = []; 

    /*
    for (var i=0; i < arr.length; i++) { //run a loop to find and push the first characters into wordArray
        var firstWord = upper.slice(i, i+1);
        var word = String(firstWord.join(" "));

        console.log(word);
        console.log(word.slice[0, 1]);
    }
    */

    
    var result = upper.reduce(function (accumulator, currentValue) {
        /*
        console.log(currentValue);
        console.log(currentValue.split(''));
        console.log(currentValue.split('')[0]);
        */
        return accumulator.concat(currentValue.split('')[0]);
        },[]);
    
    //console.log(result);

    return console.log(result.join(''));
    
}

acronym(['very', 'important', 'person']);
acronym(['national', 'aeronautics', 'space', 'administration']);