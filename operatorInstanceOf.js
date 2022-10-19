class Employee {}

class Manager {}

const budi = new Employee();
const jafar = new Manager();

console.log(budi instanceof Employee); // apakah budi dibuat di class Employee
console.log(budi instanceof Manager); // apakah budi dibuat di class Manager
