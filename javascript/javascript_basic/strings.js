// Strings are primitive and immutable

let str = "Hi";
let greeting = "Hello";

let message =  `${str} ${greeting}`;

console.log(message);

str = "Good  Morning";

console.log(str.length);

console.log(str[10]);

// Concatenation 

let className = "btn";

className += " btn-primary";
className += " None";

console.log(className);

// Convert values to string

let status = false;
str = status.toString();
console.log(typeof(str));

// Comparing strings

let result = 'a' < 'b';
console.log(result);