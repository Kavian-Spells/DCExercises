var hello = function () {
    console.log("Hello, world!");
}

function callNTimes(times, fun) {
    for (var i=0; i < times; i++) {
        fun();
    }
}

callNTimes(5, hello);