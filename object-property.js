// What will find return?

// All elements
// Only the matching element
// Only the first matching element

const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJoul'},

];

const names = students.map( s => s.name);
console.log(names);
const ids = students.map( s => s.id);
console.log(ids);
const bigger = students.filter( s => s.id > 40);
console.log(bigger);

const isThere = students.find( s => s.id > 40);
console.log(isThere);
