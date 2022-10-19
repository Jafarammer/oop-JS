class Configuration {
  static title = "Learn oop JavaScript";
  static version = 1.0;
  static author = "Jafarammer";
}

const config = new Configuration();
// call static field
console.log(Configuration.title);
console.log(Configuration.version);
console.log(Configuration.author);
