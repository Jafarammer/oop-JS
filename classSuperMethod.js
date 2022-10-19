class Shape {
  paint() {
    console.log("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint(); //call method paint parent in class sahpe
    console.log("Paint Circle");
  }
}

const circle = new Circle();
circle.paint();
