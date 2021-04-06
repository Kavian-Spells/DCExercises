function tipAmount(billAmount, service) {
    var good = .20;
    var fair = .15;
    var bad = .10;

    if(service == 'good') {
        console.log(billAmount * good);
        return billAmount * good;
    } else if (service == 'fair') {
        console.log(billAmount * fair);
        return billAmount * fair;
    } else {
        console.log(billAmount * bad);
        return billAmount * bad;
    }
}

function totalAmount(billAmount, service) {
    total = billAmount + tipAmount(billAmount, service);
    console.log(total);
    return total;
}

totalAmount(40, 'fair');