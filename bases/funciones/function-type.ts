(() => {

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello, ${name}!`;
    const saveTheWorld = () => 'The world is saved!';

    let myFunction: Function;

    myFunction = addNumbers;
    console.log(myFunction(5, 10));

    myFunction = greet;
    console.log(myFunction('Clark'));

    myFunction = saveTheWorld;
    console.log(myFunction());


})()