//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = {
    name: 'subaru',
    type: 'sedan',
    insured: true,
    mileage: 10000,
    new: false,
    hybrid: true,
    transmission: 'manual',
  };


console.log(`Check value of car: ${car.name === 'subaru'}`)
console.log("Prediction: true")

console.log(`Check type of car: ${car.type == 'sedan'}`)
console.log("Prediction: true")


console.log(`Check insurance of car: ${car.insured}`)
console.log("Prediction: true")

console.log(`Check type and insurance of car: ${
    car.type == 'sedan' && car.insured
  }`)
console.log("Prediction: true")

console.log(`Check mileage of car: ${car.mileage > 10000}`)
console.log("Prediction: true")
