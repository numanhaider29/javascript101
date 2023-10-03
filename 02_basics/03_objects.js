// singleton
// object.create

// object literals is the approach used here

const mySym = Symbol("key1")

const JsUser = {
    name: "Nouman",
    "full name": "Nouman Haider", // method 2 is used to access this 
    age : 30,
    [mySym]: "mykey1",   // [] are used here to use mySym Symbol as a key in object JsUser
                         // if it's placed as mySym instead of [mySym] it will not be cosidered a symbol   
    location: "daska",
    email: "nomi@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
    
}

//  console.log(JsUser.email)       // method 1 to access object
// console.log(JsUser["email"])    // method 2 to access object
// console.log(JsUser["full name"])
//console.log( JsUser[mySym])
 //console.log(typeof JsUser[mySym])
JsUser.email = "numanhaider29@gmail.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "changedemail@google.com"
 console.log(JsUser)

JsUser.greeting = function (){
    console.log("Welcom to Js")
}
JsUser.greetingtwo = function (){
    console.log(`Welcom to Js  ${this.name}`)
}

 console.log(JsUser.greeting())
 console.log(JsUser.greetingtwo())


