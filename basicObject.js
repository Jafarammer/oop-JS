// Object literals
const mahasiswa = {
  name: "Jafar",
  energy: 10,
  eat: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(`Halo ${this.name}, enjoy your meal`);
  },
};

// function declaration
function Mhs(name, energy) {
  const mhs = {};
  mhs.name = name;
  mhs.energy = energy;
  mhs.eat = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.name}, enjoy your meal`);
  };
  mhs.play = function (time) {
    this.energy -= time;
    console.log(`Halo ${this.name}, have a nice play`);
  };
  return mhs;
}
const jafar = Mhs("Jafar", 15);

// constructor function
function Mhs2(name, energy) {
  this.name = name;
  this.energy = energy;
  this.eat = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.name}, enjoy your meal`);
  };
}

const mia = new Mhs2("Helmia", 15);
