function coolCities(cityArray) {
    var newArray = [];

    for (var i=0; i < cityArray.length; i++) {
        if (cityArray[i].temperature < 70) {
            newArray.push(cityArray[i].name);
        }
    }

    console.log(newArray);
}

coolCities([
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ]);