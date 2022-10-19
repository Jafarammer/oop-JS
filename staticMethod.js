class MathUtils {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUtils.sum(1, 2, 3, 4);
console.log(result);
