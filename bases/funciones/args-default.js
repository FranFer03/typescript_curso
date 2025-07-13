"use strict";
(() => {
    const fullName = (firstName, upper = true, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || 'No Last Name'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No Last Name'}`;
    };
    const person_1 = fullName('Bruce', true, 'Wayne');
    const person_2 = fullName('Clark', false);
    console.log(person_1);
    console.log(person_2);
})();
