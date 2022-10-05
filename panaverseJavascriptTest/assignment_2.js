
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name = "Arsalan"
let lower = name.toLowerCase()
let capital = name.toUpperCase()
let title= (name.charAt(0).toUpperCase() + name.slice(1))
console.warn(`This is a example of lower case of a name ${lower} `)
console.warn(`This is a example of upper case of a name ${capital} `)
console.warn(`This is a example of title case of a name ${title}`)