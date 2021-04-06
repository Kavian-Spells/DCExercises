function longLongVowels(string) {
    //lowerString = string.toLowerCase();

    var longVowelsObj = {
        aa: 'aaaa',
        ee: 'eeee',
        ii: 'iiii',
        oo: 'oooo',
        uu: 'uuuu',

        AA: 'AAAA',
        EE: 'EEEE',
        II: 'IIII',
        OO: 'OOOO',
        UU: 'UUUU'
    }

    var newArray = [];

    for (var i=0; i < string.length; i++) {
        var indexVowel = string[i]; 
        var twoChar = string.slice(i, i+2);

        if (twoChar.includes('aa' || 'AA')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('ee' || 'EE')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('ii' || 'II')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('oo' || 'OO')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('uu' || 'UU')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('AA')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('EE')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('II')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('OO')) {
            newArray.push(longVowelsObj[twoChar]);
        } else if (twoChar.includes('UU')) {
            newArray.push(longVowelsObj[twoChar]);
        } else {newArray.push(indexVowel);}
    }

    //console.log(newArray);
    console.log(newArray.join(""));
}

longLongVowels('Cheese');