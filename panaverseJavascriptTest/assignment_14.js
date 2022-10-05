//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 13. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let oldPersonsList = ["Arsalan", "usman", "hassan", "bilal", "Alina"]

console.log(`Arsalan is not coming`)

let newPersonsList = oldPersonsList.map((person) => {
    if (person !== "Arsalan")
        return person
    return "Khalid"
})

newPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))