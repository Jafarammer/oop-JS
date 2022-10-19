class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtils {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("Parameters cannot be empty!!!", "numbers");
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
  if (error instanceof ValidationError) {
    console.log(
      `An error occurred in the field ${error.field} with error ${error.message}`
    );
  } else {
    console.log(`An error occurred : ${error.message}`);
  }
} finally {
  console.log("Program completed");
}
