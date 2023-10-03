const codding = ["js","ruby","java","python","c++"]

// codding.forEach( function (item){             // using callback function (function with no name) with foreach
//     console.log(item)
// })

// codding.forEach((item)=>{                     // using arrow function with foreach
// console.log(item)
// })


// function PrintMe (item){
// console.log(item)
// }
// codding.forEach(PrintMe)

// codding.forEach((item,index,arr)=>{
// console.log(item,index,arr)
// })

const mycodding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
    {
        languageName : 'Java',
        languageFileName : 'Java'
    }
]
mycodding.forEach((item)=>{
console.log(item.languageName)
})
