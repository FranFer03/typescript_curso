(() => {

    const error = (msg: string): never => {
        throw new Error(msg);
    }

    error("Error in abc function");
})()