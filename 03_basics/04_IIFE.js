// imediately invoked function expression IIFE

// function chai (){
//     console.log("DB IS CONNECTED")
// }
// chai()
(function chai (){
    console.log("DB IS CONNECTED")   // to avoid the global scope pollution IIFE is used and to invoke function imediately
})();   

( ()=>{
    console.log(`DB CONNECTED TWO`)
} )();
( (name)=>{
    console.log(`DB CONNECTED Three ${name}`)
} )("Nouman");