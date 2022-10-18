// property in class
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
}
const jafar = new Person("Jafar");
console.log(jafar);
// call property in constructor
console.log(jafar.firstName);
// make property outside constructor class
jafar.lastName = "Alkaff";
console.log(jafar.lastName);
const fullname = jafar.firstName + " " + jafar.lastName;
console.log(`Fullname = ${fullname}`);

const mia = new Person("Helmia");
console.log(mia);
console.log(mia.firstName);
mia.lastName = "Alkaff";
console.log(mia.lastName);
