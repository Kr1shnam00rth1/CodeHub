let counter = 100;
console.log(counter);

counter = 0o73; // Octal value start with zero

console.log(counter);

counter = 0x8; //Headecimal
console.log(counter);

let price = 9.99;
let tax = 0.08;
let discount = .05; // valid but not recommeded

console.log(price,tax,discount)

// in JS _ is used in between in numbers as a numeric seprateor mkae the reading easy

let value = 100_100;
console.log(value);

value = 0b1111_11111;
console.log(value);


// Primitive values which are stored in stack

let a,b;
a=20;
console.log("Value of a",a);
b=a;
console.log("Value of b",b);
b+=1;
console.log("Value of a and b",a,b);