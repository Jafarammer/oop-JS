class Employee {
  sayHello(name) {
    console.log(`Halo ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Halo ${name}, my name is manager ${this.name}`);
  }
}
const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const eko = new Manager();
eko.name = "Eko";
eko.sayHello("Joko");
