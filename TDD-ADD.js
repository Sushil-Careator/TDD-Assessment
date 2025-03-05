function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

// Testing
console.log(add("") === 0); // Should return true

console.log(add("1") === 1); // Should return true

console.log(add("1,5") === 6); // Should return true
