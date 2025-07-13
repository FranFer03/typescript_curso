(() => {

    enum AudioLevel {
        MIN = 1,
        MEDIUM = 5,
        MAX = 10
    }

    let currentAudioLevel: AudioLevel = AudioLevel.MEDIUM;

    console.log({ currentAudioLevel });

})()