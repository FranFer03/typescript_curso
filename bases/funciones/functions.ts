(() => {

    const hero: string = 'Flash';

    function returnHero(): string {
        return hero;
    }

    const activateBatSignal = (): string => {
        return 'Activating bat signal';
    }

    console.log('Hello from functions.ts');
    console.log(typeof activateBatSignal)



})()