function squareNum(numArray) {
    var newArray = [];

    for (var i=0; i < numArray.length; i++) {
        var numIndex = numArray[i] * numArray[i];
       newArray.push(numIndex);
    }

    console.log(newArray);
}

squareNum([1,2,3,4,5,6,7,8,9]);