/*
    Primitive types     Complex types

    1.null              1.object
    2.undefined
    3.boolean
    4.number
    5.string // JS strings are immutables u can add new , but not alter already existing
    6.symbol
    7.bigint
*/

let counter;
console.log(typeof(counter));

count = 100;
console.log(typeof(counter));

counter = 100.1;
console.log(typeof(counter));

counter = false;
console.log(typeof(counter));
counter  = "Hai";
console.log("Boolean converstion ",Boolean(counter));

counter = "krishna";
console.log(typeof(counter));

console.log("Before ",counter);
counter[0] = "K";
console.log("After",counter);


counter = null;
console.log(typeof(counter));

console.log("Max of number: ",Number.MAX_VALUE);

console.log('a'/3); // Outputs NaN not a number

counter = Symbol();
console.log(counter);
console.log(typeof(counter));

counter = 12n; // bigint to store value larger than 2**52 -1
console.log(counter);
console.log(typeof(counter));

var person = {}; //object
console.log(typeof(person));

person.name = "krishna";
person.age = 12;


console.log(person);
console.log(person.name);