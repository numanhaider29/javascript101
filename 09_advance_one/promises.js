// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     },2000)
// })
// promiseOne.then(function(){
//     console.log('promise is consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve()
//     },3000)
// }).then(function(){
//     console.log('async 2 is resolved')
// })






// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve({Username: "Chai", email:"chai@example.com"})
//     },5000)
// })
// promiseThree.then(function(user){
// console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : 'Nouman', password :'123456'})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
// console.log(user);
// return user.username
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
// console.log(error)
// }).finally(()=>console.log("the promise is either resolved or rejected"))

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username :"Qazi Nouman haider",email : "numanhaider29@gmail.com"})
//         }else{
//             reject("ERROR : SOMETHING WENT WRONG")
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })

// const practice = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     let error = false;
//     if (!error) {
//         resolve({
//             username: "nomi", email : "nomi@gmail.com"
//         })
//     }else{
//         reject(("Error: Something went wrong"))
//     }
//     },2000)
// })

// practice.then((user)=>{
// console.log(user);
// return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })

// const finalPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username : "Nouman Haider",email :"numan.com"})
//         }else{
//             reject(("Error: something went wrong"))
//         }
//     },2000)
// })
// finalPromise.then((user)=>{
// console.log(user)
// return user.username;
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
// console.log(error)
// }).finally(()=>{
//     console.log("promises are either resolved or rejected")
// })

// const myPromise = new Promise(function(resolve,reject){
// setTimeout(() => {
//     let error = false;
//     if (!error) {
//         resolve({username : "numan haider",email : "numanhaider29@gmail.com"})
//     }else{
//         reject(('Error: Something went wrong'))
//     }
// }, 2000);
// })

// myPromise.then((user)=>{
// console.log(user)
// return user.username
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
// console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })

// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"Qazi Nouman Haider",address : "Daska Sialkot"})
//         }else{
//             reject(("Error: Something went wrong there was an error"))
//         }
//     },2000)
// })
// myPromise.then((user)=>{
// console.log(user)
// return user.address;
// }).then((address)=>{
//     console.log(address)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({ username : "javascript",password:"123456789"})
//         }else{
//             reject(('Error: js went wrong'))
//         }
//     },3000)
// })

// async function consumePromiseFive (){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
       
//          const data =    response.json()
//          console.log(data)
//     } catch (error) {
//         console.log("E:", error);
//     }
//     }

    //getAllUsers()
    
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
    
    
    