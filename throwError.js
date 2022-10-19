class MathUtils {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Parameters cannot be empty!!!");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}
const result = MathUtils.sum();

// const result = MathUtils.sum(1, 2, 3, 4);
// console.log(result);
