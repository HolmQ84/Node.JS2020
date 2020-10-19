
// Promises
// Two States
// Pending
// Fulfilled
    // - resolve, reject

// new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve("Everything went well");
//         }, 3000);
//     } catch {
//         reject("Something went wrong!");
//     }
// })
//     .then(output => console.log(output))
//     .catch(output => console.log(output));

// Create a function that returns a promise.

// new Promise((resolve, reject) => {
//     try {
//         resolve(myPromiseFunction());
//     } catch {
//         reject("Didnt work!");
//     }
// })
//     .then(output => console.log(output))
//     .catch(output => console.log(output))

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Not every promise works out this way!")
        }, 4000);
    });
}

// IIFE

// (async function callMyPromise() {
//     console.log("Inside 'callMyPromise() function");
//     // myPromiseFunction().then(console.log);
//     const output = await myPromiseFunction();
//     console.log(output);
// })();

const asyncArrowFunction = async () => {
    const output = await myPromiseFunction();
    console.log(output);
}

asyncArrowFunction();

(async () => {
    try {
        const output = await myPromiseFunction();
        console.log(output);
    } catch {
        // handle catch here.
    }
})();