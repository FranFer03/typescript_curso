(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };
  let myCustomVariable: string | number | Hero = "Hello World";
  console.log(typeof myCustomVariable);

  myCustomVariable = 42;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Iron Man",
    age: 45,
    powers: ["genius intellect", "powered armor suit"],
  };
  console.log(typeof myCustomVariable);
})();
