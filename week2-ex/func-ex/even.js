function evenNumbers(numArray) {
    var newArray = [];

    for (var i=0; i < numArray.length; i++) {
        var numIndex = numArray[i];
        if (numIndex%2 !== 1) {
            newArray.push(numIndex);
        }
    }

    console.log(newArray);
}

evenNumbers([1,2,3,4,5,6,7,8,9]);