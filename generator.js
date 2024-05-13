function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().value); // Output: undefined


function* counter(start, step) {
    let count = start;
    while (true) {
        yield count;
        count += step;
    }
}

const countGen = counter(0, 2); // Starts from 0 with a step of 2
console.log(countGen.next().value); // Output: 0
console.log(countGen.next().value); // Output: 2
console.log(countGen.next().value); // Output: 4
// Continues infinitely
