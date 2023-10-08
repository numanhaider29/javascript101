// object literal

const user = {
    username : "Nouman",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){

        // console.log("got the user details here")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}
// user.address = "Qazi Street awami road daska"
// console.log(user.username)
//  console.log(user.getUserDetails())
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this
    this.greeting = function (){
        console.log(`Welcom ${this.username}`)
    }
}

const userOne = new User("Nouman Haider",30,true)
const userTwo = new User("Asad Mehmood",25,true)
console.log(userOne.constructor)
// console.log(userOne)
// console.log(userTwo)
// console.log(userOne.greeting())
// console.log(userTwo.greeting())