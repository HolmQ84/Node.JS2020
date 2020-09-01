
// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Martin";
const lastName = "Holmwvist";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("1 - My name is "+firstName+" and my last name is "+lastName);

console.log("2 - My name is %s and my last name is %s", firstName, lastName);

const intro = "My name is "+firstName+" and my last name is "+lastName;
console.log("3 - "+intro);

console.log("4 - "+firstName+" "+lastName);
// Variabler med komma, er at foretrække fremfor at +.
console.log("5 - "+firstName, lastName);

// Back Ticks.
console.log(`6 - My name is ${firstName} and my last name is ${lastName}`)

const stringTypeOne = "En 'Soldat' kom marcherende";
const stringTypeTwo = 'To "Soldater" kom marcherende';
const stringTypeThree = `Tre 'Soldater' kom "marcherende"`;

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2019";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

console.log("7 - "+parseInt(year)+number);

const currentYear = Number(year)+number;

console.log("8 - "+currentYear);

const testParsing = "123abc";

// Her vil den kun udskrive 123, og resten vil den ikke kunne ændre.
console.log("9 - "+parseInt(testParsing));
console.log("10 - "+String(testParsing));

// --------------------------------------

