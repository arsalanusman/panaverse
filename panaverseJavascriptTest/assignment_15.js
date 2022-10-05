// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 14. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let oldPersonsList = ["Arsalan", "usman", "hassan", "bilal", "Alina"]

console.log(`Arsalan is not coming\n`)

let newPersonsList = oldPersonsList.map((person) => {
    if (person !== "Arsalan")
        return person
    return "Khalid"
})


newPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))

console.log(`\nUpdate!!! Hey guest I just noticed that we have some extra space on table so I'm intiviting other members too\n`)


newPersonsList.unshift('Israr')

newPersonsList.splice(2, 0, 'Bilal');

newPersonsList.push('EMad');


newPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))