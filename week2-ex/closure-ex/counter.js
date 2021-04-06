function counter (calls) {
    for (var i=0; i < calls; i++) {
        console.log(i+1);
        return i + 1;
    }
}

var count1 = counter()
var count2 = counter()


counter(1);
