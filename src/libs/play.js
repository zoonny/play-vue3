// closure example
function adder(number) {
  return (otherNumber) => {
    return number + otherNumber;
  };
}

const addFive = adder(5);
console.log(addFive(10));

// magic number
const MAX_PRICE = 1_000_000_000_000;
console.log(`The maximum price is ${MAX_PRICE}`);
