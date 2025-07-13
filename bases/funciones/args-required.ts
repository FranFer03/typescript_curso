(() => {


    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const person_1 = fullName('Bruce', 'Wayne');
    const person_2 = fullName('Clark', 'Kent');

    console.log(person_1);
    console.log(person_2);

})()