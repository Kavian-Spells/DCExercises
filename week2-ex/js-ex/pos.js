function positiveNumbers(numArray) {
    var newArray = [];

    for (var i=0; i < numArray.length; i++) {
        var numIndex = numArray[i];
        if (numIndex > -1) {
            newArray.push(numIndex);
        }
    }

    console.log(newArray);
}

positiveNumbers([-1, -2, -3]);