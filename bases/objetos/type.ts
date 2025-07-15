(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Flash",
    age: 30,
    powers: ["super speed", "time travel"],
  };

  flash = {
    name: "Barry Allen",
    age: 35,
    powers: ["super strength", "flight"],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 35,
    powers: ["super strength", "flight"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName?.());

  console.log(superman.getName?.());
})();
