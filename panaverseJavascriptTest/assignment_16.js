// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 15. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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