"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["MIN"] = 1] = "MIN";
        AudioLevel[AudioLevel["MEDIUM"] = 5] = "MEDIUM";
        AudioLevel[AudioLevel["MAX"] = 10] = "MAX";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.MEDIUM;
    console.log({ currentAudioLevel });
})();
