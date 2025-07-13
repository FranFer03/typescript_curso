"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello, ${name}!`;
    const saveTheWorld = () => 'The world is saved!';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(5, 10));
    myFunction = greet;
    console.log(myFunction('Clark'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
