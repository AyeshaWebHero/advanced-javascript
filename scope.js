// 1. Can you access let variable outside of the block scope?

// Yes
// No
// Sometimes

// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     console.log(bonus);
//     return result;

// }

// const output = sum(3, 7);
// console.log(bonus); //global scope
// console.log(output); 


let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    //console.log(bonus);
    if(result > 9){
        const mood = "happy";

        console.log(mood);
    }
    return result;

}

const output = sum(3, 7);
console.log(bonus); //global scope
console.log(output); 