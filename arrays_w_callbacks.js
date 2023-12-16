// Array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// method

console.log(nums.every(num => num >= 0)); 
console.log(panagram.every(word => word.length < 8)); 

// filter

console.log(nums.filter(num => num < 4)); 
console.log(panagram.filter(word => word.length % 2 === 0)); 


// find 

console.log(nums.find(num => num % 5 === 0)); 
console.log(panagram.find(word => word.length > 5)); 

console.log(nums.findIndex(num => num % 3 === 0)); 
console.log(panagram.findIndex(word => word.length < 2)); 

// for reach

nums.forEach(num => console.log(num * 3)); 
panagram.forEach(word => console.log(word + '!')); 

// map

console.log(nums.map(num => num * 100)); 
console.log(panagram.map(word => word.toUpperCase())); 


// some 

console.log(nums.some(num => num % 7 === 0)); 
console.log(panagram.some(word => word.includes('a'))); 

