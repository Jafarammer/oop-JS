// method in class
class Person {
  constructor(name) {
    this.name = name;
  }
  // meethod / function
  sayHello(nameOne) {
    console.log(`Halo ${nameOne}, my name is ${this.name}`);
  }
}

const mia = new Person("Mia");
console.log(mia);
console.log(mia.name);
mia.sayHello("Jafar");

const jafar = new Person("Jafar");
console.log(jafar);
console.log(jafar.name);
jafar.sayHello("Mia");
