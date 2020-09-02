// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message

console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age.

const info = {
    name: "Martin",
    age: 36
}

console.log("Name: "+info.name+", Age: "+info.age);

// --------------------------------------
// Exercise 3 - Add a property

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;
console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = {
    "description": "The best song in the world."
};

// remove the property "description" and add a property called "about" that should say "Just a tribute."

console.log("Before deleting: "+thisSong.description);
delete thisSong.description;
console.log("After deleting: "+thisSong.description);
thisSong.about = "Just a tribute";
console.log(thisSong.about);

// --------------------------------------

// Intro to arrays...:

// Declare an array with entries in it.
const fruits = ["apple", "banana"];
console.log(fruits);

// Add another entry to the array.
fruits.push("pear");
console.log(fruits);

// Remove the last entry.
fruits.pop();
console.log(fruits);

// Print out the [0] item from the list.
console.log(fruits[0]);