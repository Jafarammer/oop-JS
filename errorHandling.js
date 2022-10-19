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

try {
  const result = MathUtils.sum();
  console.log(result);
} catch (error) {
  console.log(`An error occurred : ${error.message}`);
} finally {
  console.log("Program completed");
}
