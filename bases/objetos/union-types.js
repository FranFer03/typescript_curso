"use strict";
(() => {
    let myCustomVariable = "Hello World";
    console.log(typeof myCustomVariable);
    myCustomVariable = 42;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Iron Man",
        age: 45,
        powers: ["genius intellect", "powered armor suit"],
    };
    console.log(typeof myCustomVariable);
})();
