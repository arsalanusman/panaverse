//They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

let languages = [
    { name: 'Python', code: 'PY' },
    { name: 'Javascript', code: 'JV' },
    { name: 'Java', code: 'JA' }]

    
console.log(`All Languages`)

languages.map((item) => {
    console.log(`${item.name} has a code ${item.code}`)
})