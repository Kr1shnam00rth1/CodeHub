// Objects are key value pairs, it can be any primitive tpye and the key even be a function

// Property : value

// Objects values are stored in the heap while primitive dataypes are stored in the stack
// The refrence for the values for the object is stroed in the stack

let empty = {};

let person ={
    firstName: 'Jhon',
    lastName: 'Doe'
};

// Accessing  . operator

console.log(person.firstName);
console.log(person.lastName);

// Modyfiying value

person.firstName = "Krishna";

console.log(person.firstName);

// Adding new property

person.age = 10;

console.log(person);

// delete new propert

delete person.age;

console.log(person);

// Check property exist
console.log("age" in person);
console.log("firstName" in person);

// Objects are refeence values, whose values are stored in the heap and referecne in kept in the stack

console.log("Before copyinh",person);

let member = person;

member.firstName = "Moorthy";

console.log("After Update in memeber",person);