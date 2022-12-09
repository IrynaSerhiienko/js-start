//
/* */

let name = prompt("What is your name?", "Iryna");
console.log(`Hi, ${name}!`);

let yearBornPerson = prompt("What year were you born?", 1990);
const currentYear = 2022;
let agePerson = currentYear - yearBornPerson;
console.log(agePerson);

let lengthSideSquare = prompt(
  "Hi! Write the length of the side of the square",
  12
);
let perimeter = 4 * lengthSideSquare;
alert(perimeter);
console.log(perimeter);

let radius = prompt("Hi! Write the radius of the circle", 5);
let areaСircle = 2 * Math.PI * radius;
alert(areaСircle);
console.log(areaСircle);
