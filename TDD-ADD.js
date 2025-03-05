function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers.charAt(2);
    numbers = numbers.slice(4);
    const numArray = numbers.split(delimiter);
    const negatives = numArray.filter((num) => num < 0);

    if (negatives.length > 0) {
      throw new Error("Negative numbers not allowed: " + negatives.join(","));
    }

    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }

  if (numbers === "") {
    return 0;
  }

  const numArray = numbers.split(/,|\n/);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error("Negative numbers not allowed: " + negatives.join(","));
  }

  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

// Testing
console.log(add("") === 0); // Should return true

console.log(add("1") === 1); // Should return true

console.log(add("1,5") === 6); // Should return true

console.log(add("1\n2,3") === 6); // Should return true

console.log(add("//;\n1;2") === 3); // Should return true

// Testing negative numbers
try {
  add("1,-2,3,-4");
} catch (e) {
  console.log(e.message === "Negative numbers not allowed: -2,-4"); // Should return true
}

// Testing multiple negative numbers
try {
  add("-1,-2,-3");
} catch (e) {
  console.log(e.message === "Negative numbers not allowed: -1,-2,-3"); // Should return true
}
