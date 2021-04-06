function leetspeak (phrase) {
    /*string.replaceAll('A', '4');
    string.replaceAll('E', '3');
    string.replaceAll('G', '6');
    string.replaceAll('I', '1');
    string.replaceAll('O', '0');
    string.replaceAll('S', '5');
    string.replaceAll('T', '7');*/

    string = phrase.toLowerCase()

    let leetspeak = {
        a: '4', 
        e: '3',
        g: '6',
        i: '1',
        o: '0',
        s: '5',
        t: '7'
    }

    let newArray = [];

    for (var i=0; i < string.length; i++) {
        var letter = string[i]; 
        if (letter.includes('a')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('e')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('g')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('i')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('o')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('s')) {
            newArray.push(leetspeak[letter]);
        } else if (letter.includes('t')) {
            newArray.push(leetspeak[letter]);
        } else {newArray.push(letter);}
    }
        console.log(newArray.join(""));

    /*for (i=0; i <= phrase.length; i++) {
        var e = a.replace('e', '3');
    }

    for (i=0; i < phrase.length; i++) {
        var g = e.replace('g', '6');
    }

    for (i=0; i < phrase.length; i++) {
        var ii = g.replace('i', '1');
    }

    for (i=0; i < phrase.length; i++) {
        var o = ii.replace('o', '0');
    }

    for (i=0; i < phrase.length; i++) {
        var s = o.replace('s', '5');
    }

    for (i=0; i < phrase.length; i++) {
        var t = s.replace('t', '7');
    }*/


    /*while (phrase <= phrase.length) {
        var a = phrase.replace('a', '4');

        var e = a.replace('e', '3');

        var g = e.replace('g', '6');

        var ii = g.replace('i', '1');

        var o = ii.replace('o', '0');

        var s = o.replace('s', '5');

        var t = s.replace('t', '7');
    }*/
}

leetspeak('Leet');