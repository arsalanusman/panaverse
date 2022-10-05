//Greetings: Start with the array you used in Exercise 10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names = ["Arsalan", "usman", "hassan", "bilal", "Alina"]
let message = 'This is my demo text message';

names.map((name) => console.log(`Hello ${name}, ${message}`))