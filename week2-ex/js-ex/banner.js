function printBanner(text) {
    var banner = `* ${text} *`;
    var starLine = "";

    for (var length = 0; length < banner.length; length++) {
        starLine = starLine + "*";
    }

    console.log(starLine);
    console.log(banner);
    console.log(starLine);
}

printBanner('Welcome to DigitalCrafts');