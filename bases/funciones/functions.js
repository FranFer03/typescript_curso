"use strict";
(() => {
    const hero = 'Flash';
    function returnHero() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Activating bat signal';
    };
    console.log('Hello from functions.ts');
    console.log(typeof activateBatSignal);
})();
