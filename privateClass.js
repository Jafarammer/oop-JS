class Counter {
  // private class di awali tanda #
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.info(counter.get());

counter.decrement();
counter.decrement();
counter.decrement();
console.info(counter.get());
