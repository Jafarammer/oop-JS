class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Halo ${name}, my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(
      `Halo ${name}, my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}
const budi = new Employee("Budi");
budi.sayHello("Joko");

const eko = new Manager("Jafar", "Alkaff");
eko.sayHello("Joko");
