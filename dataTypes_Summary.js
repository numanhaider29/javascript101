// Primitive Data Types : there are 7 types 
//  string, boolean, number, null,undefined,symbol,BigInt 


// Reference Type Data Types (Non-premetive)
// Arrays,Objects and functions

// Javascript is Dynamic Typed langiage because we dont need to specify if the variable is number value or string value
// let x = 10 ------ we dont need to specify if the value is string or number it's understood that the value is number

// symbols
const id = Symbol(123);
const anotherid = Symbol(123);
// console.log(id === anotherid) // this will return false in the console
const bignumber = 5484564946544654684844564n

const names = ["Asad","Fahad","Numan"]; // array

let myObject =    // Object
{
    name: "Numan",
    age:"29",
    education : "BSSE"
}

const myfunction =  function  (){
console.log("Hello world")
}

console.log(typeof(bignumber)) // bigint
console.log(typeof(anotherid)) // symbol
console.log(typeof(myObject)) // object
console.log(typeof(names)) // object




