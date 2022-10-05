//Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Canada", "India", "Pakistan", "United States"]

//Print your array in its original order.
console.warn(`original State ${places}`)

//Print your array in alphabetical order without modifying the actual list.
console.warn(`sort State ${[...places].sort()}`)

//Show that your array is still in its original order by printing it.
console.warn(`original State ${places}`)

//Print your array in reverse alphabetical order without changing the order of the original list.
console.warn(`reverse State ${[...places].reverse()}`)

//Reverse the order of your list. Print the array to show that its order has changed.
console.warn(`reverse State ${places.reverse()}`)

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.warn(`original State ${places}`)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.warn(`reverse State ${[...places].sort()}`)

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.warn(`order has changed ${places.sort().reverse()}`)
