"use strict";
(() => {
    var _a, _b;
    let flash = {
        name: "Flash",
        age: 30,
        powers: ["super speed", "time travel"],
    };
    flash = {
        name: "Barry Allen",
        age: 35,
        powers: ["super strength", "flight"],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: "Clark Kent",
        age: 35,
        powers: ["super strength", "flight"],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    console.log((_b = superman.getName) === null || _b === void 0 ? void 0 : _b.call(superman));
})();
