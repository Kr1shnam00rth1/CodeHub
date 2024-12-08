// In JS array can have mixed datatypes and it does not have a fixed size

let score = new Array();
console.log(typeof(score));
console.log(score.length);

// to have the array to store fixed number of elements

let score1 = new Array(10);

// Initilize array while declaring 

let score2 = new Array(1,2,3,4,5,5);

console.log(score2);
console.log(score2.length);

//  Declaring without constructors
let colors = [1,2];
console.log(typeof(colors));
console.log(colors[0],colors[1]);

// Modify data

colors[1] = "krishna";
console.log(colors);

// Appending an element

colors.push("Moorthy");
console.log(colors);

// removeing from end

colors.pop()
console.log(colors);

// Appending to beginning 

colors.unshift("Moorthy");
console.log(colors);

// removing from the begging

colors.shift();
console.log(colors);

// find index

let index = colors.indexOf("krishna");
console.log(index);

// Check if a value in array

let a = "krishna";
console.log(colors.includes(a));
