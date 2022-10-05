//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

let developer = "Arsalan"
let date = new date();

// * This Function will take two number and return it sum
const addTwoNumber = (firstNumber, secondNumber) => {
    return (
        <>
        <h1>Developer: {developer}</h1>
        <h3>Date: {date}</h3>
        <p> "My favorite number is:" : {firstNumber + secondNumber}</p>
        </>
        )
}

// * Here we are just calling function and passing it two numbers  
console.log(addTwoNumber(1, 3))