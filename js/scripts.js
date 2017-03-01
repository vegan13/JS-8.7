var femaleNames = ['Ania', 'Monika', 'Kasia', 'Justyna', 'Weronika'];

var maleNames = ['Adam', 'Mariusz', 'Wiktor', 'Leszek', 'Maciek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Zbychu';

if (allNames.indexOf(newName) === -1){
    
    console.log('Tego imienia nie ma na liście imion');
    allNames.push(newName);
    
} else {
    
    console.log('Imię jest już w bazie danych');
    
}

console.log(allNames);
