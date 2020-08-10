// 1. What will filter return?

// All elements
// Only the matching element
// Only the first matching element

//
const numbers = [3, 4, 5, 6, 7, 8];

const output = [];

for (let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

//
// numbers.map(function(element, index, array){
//     console.log(element, index, array);

// })

//
// const result = numbers.map(function(element){
//     return element * element;

// })

// console.log(result);


//
const result = numbers.map(x => x * x);
console.log(result);

//
const bigger = numbers.filter( x => x < 5);
console.log(bigger);

//find
const isThere = numbers.find( x => x > 3);
console.log(isThere);