let mydate = new Date()

// console.log(mydate.toLocaleDateString())
// console.log(mydate.toDateString())
// console.log(mydate.toString())
// console.log(typeof(mydate))

//let myCustomeDate = new Date(2023,0,23)
//let myCustomeDate = new Date(2023,0,23,14,25)
//let myCustomeDate = new Date("2023-01-14")
let myCustomeDate = new Date("01-14-2023")

// console.log(myCustomeDate.toLocaleString())
let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCustomeDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)


console.log(newDate.toLocaleString('default',{
    weekday : "long" 
}))