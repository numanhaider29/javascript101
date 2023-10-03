const myNums = [1,2,3,4,5]

// const myTotal =  myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval   // it's used in preparing a shoping cart (Reducer)
// },0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)


const shopingCart = [
    {
        itemName: "js Course",
        price : 2999
    },
    {
        itemName: "python Course",
        price : 999
    },
    {
        itemName: "Data Science Course",
        price : 12999
    },
    {
        itemName: "Mobile dev Course",
        price : 7000
    }
]

const pricetopay= shopingCart.reduce((acc, item)=>acc+item.price,0)
console.log(pricetopay)