(() => {

    let a: number = 5;

    let b: number = 10;

    let c: number = a + b;

    console.log({ a });
    console.log({ b });
    console.log({ c });

    let avengers: number = 30;

    let villains: number = 20;

    if (avengers < villains) {
        console.log('We are outnumbered!');
    }
    else {
        console.log('We can win!');
    }

})();