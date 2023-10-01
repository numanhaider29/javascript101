const user = {
    username : "Nouman",
    price: 999,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

}
// user.welcomeMessage()  // the global object in browsers is window object
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)




// function chai(){
//     let username = "numan"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "Numan"
//     console.log(this.username)
// }
// chai()

// const chai = () =>{
//     let username = "Numan"
//     console.log(this.username)
// }
// chai()

// in all cases output is undefined because this keyword works to fetch values from objects and not the functions

// const addTwo = (num1,num2)=>{    // explicit return syntax to write arrow function
//     return num1+num2 
// }
// const addTwo = (num1,num2)=>    // implicit return syntax to write arrow function
//      num1+num2 
// const addTwo = (num1,num2)=>    // implicit return syntax to write arrow function
//      (num1+num2) 
const addTwo = (num1,num2)=>    // implicit return syntax to write arrow function
     ({username:"Nouman"}) 

console.log(addTwo(3,6))