function sum(numArray) {
    var finalNum = numArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    });

    console.log(finalNum);
}

sum([1, 2, 3]);