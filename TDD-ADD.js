function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers.charAt(2);
    numbers = numbers.slice(4);
    return numbers
      .split(delimiter)
      .reduce((sum, num) => sum + parseInt(num), 0);
  }

  if (numbers === "") {
    return 0;
  }

  return numbers.split(/,|\n/).reduce((sum, num) => sum + parseInt(num), 0);
}

// Testing
console.log(add("") === 0); // Should return true

console.log(add("1") === 1); // Should return true

console.log(add("1,5") === 6); // Should return true

console.log(add("1\n2,3") === 6); // Should return true

console.log(add("//;\n1;2") === 3); // Should return true
