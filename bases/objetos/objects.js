"use strict";
(() => {
    var _a;
    let flash = {
        name: "Flash",
        age: 30,
        powers: ["super speed", "time travel"],
    };
    flash = {
        name: "Clark Kent",
        age: 35,
        powers: ["super strength", "flight"],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
