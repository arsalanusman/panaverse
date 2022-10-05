//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Solution:
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

console.log(`\nUpdate!!! Hey guests I have bad news that my table is not arrive yet so we have just space for two member\n`)

newPersonsList = newPersonsList.slice(0, 2)

newPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))

console.log(`\nI am inviting ${newPersonsList.length} guests for dinner`)