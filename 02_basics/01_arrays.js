// arrays

const myArr = [1,2,3,4,5,6,7,8,9] // [1,"ali",true,3,7,a,b] this is also possible
const myHeros = ["imran Khan","Muhammad Ali Jinnah"]
//console.log(myArr[1]) // in arrays the copy operation does shallow copy whos properties share the same reference means original array is manipulated
// imortant methods in an array
// myArr.push(6) // adds alement at last of the array
// myArr.push(11)
//myArr.unshift(12)// adds the element at the start of the array
//myArr.shift()// removes the first element that is at 0 index of the array
//console.log(myArr.includes(9))// this checks if the element is available in the array
//console.log(myArr.indexOf(9))// this checks what's element at the given index
// console.log(myArr)
// const newArray = myArr.join()
// console.log(newArray)
// console.log(typeof(newArray))


// difference b/w slice and splice
// const myn1 = myArr.slice(1,3)
// console.log("A",myArr)
// console.log(myn1)
// console.log("B",myArr)
// const myn2 = myArr.splice(1,3)
// console.log("C",myArr)
// console.log(myn2)

const marvelHeros  = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

//marvelHeros.push(dcHeros)// Note here both arrays will not merge but dcHeroes array will be added as another element in marvel array
//console.log(marvelHeros)// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//const allHeros = marvelHeros.concat(dcHeros)// this is the way to merge two arrays
//console.log(allHeros)

//const allNewHeros = [...marvelHeros,...dcHeros] // this is another way to merge two arrays and popular one
//console.log(allNewHeros) // this is known as spread array syntax

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Numan"))
console.log(Array.from("Numan"))
console.log(Array.from({name:"Numan"})) // interesting because it will return just an empty array 
    // because it's not spedified that if keys or the values in object are to be converted in array form

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

