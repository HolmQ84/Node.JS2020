function myFirstFunction() {
    return "Hello World";
}

// console.log(myFirstFunction());

const myVariableFunction = function () {
    console.log("I am anonymous!")
}

const myArrowFunction = () => {
    console.log("Hi there from myArrowFunction!")
}

// myVariableFunction();
// myArrowFunction();

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

// sayHiLater(myArrowFunction);

const poke = (name) => "poke "+name;

function interact(genericInteraction, person) {
    console.log(genericInteraction(person));
}

interact(poke, "myself");

const hug = (name) => "hug "+name;

interact(hug, "myself");

const slap = (name) => "slap "+name;

interact(slap, "Victor");
interact((name) => "kick "+name, "Victor");
