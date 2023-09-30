const name = "Numan Haider"
const repoCount = 50
//console.log(name + repoCount+" here we go")

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) // this is the modern syntax and is called string interpolation

const gameName = new String('Qazi-Numan-Haider'); // it created an object

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
//console.log(gameName.indexOf("i"))
// const newstring = gameName.substring(0,5)
//  console.log(newstring)
// const anotherstring = gameName.slice(0,5)
// console.log(anotherstring)
const newStringone = "   Nomi  "
console.log(newStringone)
console.log(newStringone.trim())
const url = "http://google.com/nomi%20java"
console.log(url.replace('%20','-'))
console.log(url.includes('nomi'))
console.log(gameName.split('-'))
