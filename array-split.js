// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part);
// console.log(nums);

//splice
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 3);
console.log(removed);
console.log(nums);

//join
const together = nums.join("ami");
console.log(together);


// Final Quiz 24.10
// 1. Which value is Truthy?

// Null
// Undefined
// ‘0’
// 2. How can you get a small part of an array?

// By using the slice method
// By using the splice method
// By using the join method
// 3. Can you access variable declared with var before it is declared?

// Yes
// No
// Sometimes
// 4. Which one option will convert the arguments to an array?

// [...arguments]
// Array(arguments)
// Argments.map
// 5. What would be the output from the function below?<br /> <br /> function doSomething(x, y = 4){<br /> console.log(y);<br /> }<br /> <br /> doSomething(3,2);

// 2
// Undefined
// null