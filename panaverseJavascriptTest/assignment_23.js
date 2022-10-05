// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car = {
    name: 'subaru',
    type: 'sedan',
    insured: true,
    mileage: 10000,
    new: false,
    hybrid: true,
    transmission: 'manual',
  };


console.log(`Check value of car: <pre>car.name === 'subaru'</pre> Result: ${
    car.name === 'subaru'
  }`)
console.log("Prediction: true")

console.log(`Check case of car:  <pre>car.name === 'Subaru'</pre> Result: ${
    car.name === 'Subaru'
  }`)
console.log("Prediction: true")


console.log(`Check with lowercase of car: <pre>car.name === 'Subaru'.toLowerCase()</pre> Result:${
    car.name === 'Subaru'.toLowerCase()
  }`)
console.log("Prediction: true")

console.log(`Check equality operators: <pre>5 > 2</pre> Result: ${5 > 2}`)
console.log("Prediction: true")

console.log(` Check equality operators: <pre>5 < 2</pre> Result: ${5 < 2}`)
console.log("Prediction: true")
