// const tinderUser  = new Object() // singleton object
const tinderUser = {} // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Nouman"
tinderUser.isLoggedIn = false


//console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// console.log(tinderUser.hasOwnProperty("LoggedIn"))




const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userfullname : {
            firstname : "Nouman",
            lastname : "Haider"
        }
    }
}
//console.log(regularUser.fullName.userfullname.lastname) // this will display haider
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}               // this method will not work on objects to merge
//const obj3 = Object.assign({},obj1,obj2,obj4)  // this method will work on objects to merge "{}" could be ignored it's also considered a target where all aobject are merged togather
const obj3 = {...obj1,...obj2}         // this method will work on objects to merge mostly used 
 //console.log(obj3)

const users = [
    {
        id : 1,
        email: "asad@gmail.com"
    },
    {
        id : 2,
        email : "Mehmood@gmail.com"
    },
    {
        id : 3,
        email: "fahad@gmail.com"
    }
]

users[1].email

// console.log(users[1].email)