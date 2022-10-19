class Customer {
  fisrtName;
  lastName;
  balance = 0;
  constructor() {}
  sayHello() {}
}

const alex = new Customer();
console.info(alex);
alex.fisrtName = "Achmad";
alex.lastName = "Faizi";
console.info(alex);

// change in constructor

class Customer2 {
  fisrtName;
  lastName;
  balance = 1;

  constructor(fisrtName, lastName) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const bongol = new Customer2("Rohim", "Bongol");
console.info(bongol);
console.log(bongol.fisrtName);
console.log(bongol.lastName);
