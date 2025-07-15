(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
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

  console.log(flash.getName?.());
})();
