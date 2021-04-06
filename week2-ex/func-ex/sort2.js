function sortArray(nameArray) {
    const asc = nameArray.sort((a,b) => a.length - b.length);
    console.log(asc);   
}

sortArray([
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ]);