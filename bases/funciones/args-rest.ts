(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }


    const superman = fullName('Clark', 'Josep', 'Pete', 'Kent');

    console.log(superman);

})()