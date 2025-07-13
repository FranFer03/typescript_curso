"use strict";
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error("Error in abc function");
})();
