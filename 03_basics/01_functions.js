function myfunction(){
console.log("object1")
console.log("object2")
console.log("object3")
console.log("object4")
}
//myfunction()

// function addTwoNumbers (number1,number2) {   // number1 and number2 are the parameters
//     console.log(number1 + number2) 
// }
function addTwoNumbers (number1,number2) {   // number1 and number2 are the parameters
    // console.log(number1 + number2) 
    // let result = number1 + number2
    // return result
    return number1 +number2
}
const result =  addTwoNumbers(3,5) // 3,5 are the arguments
// console.log("Result : ",result)

function loginUserMessage(username  = "sam" ){
    // if (username === undefined){
    if (!username){
        console.log("please enter a username")
        return
    }
return `${username} just logged in`
}
// const message= loginUserMessage("Numan")
// console.log(message)
// console.log(loginUserMessage("Numan"))
// console.log(loginUserMessage(""))  // just logged in 
// console.log(loginUserMessage("Asad"))  // undefined just logged in 

function calculatCartPrice(val1,val2,...num1){
return  num1
}
// console.log(calculatCartPrice(200,400,500,2000))

const user = {
    username : "numan",
    price : 199
}

function handleObject (anyObject){
// console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username : "Haider",
    price : 500

})

const myNewArray = [200,400,100,600]

function returnSecondValue (getArray){
return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([200,500,300,800]))