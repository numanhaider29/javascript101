// for of 

// designed for arrays specially

// const arr = [1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Welcome everyone";
for (const greet of greetings) {
    // console.log(`each character is ${greet}`)
}

// MAps
const map = new Map()
map.set('PK','Pakistan');
map.set('USA','United States of America');
map.set('FR','France');
map.set('PK','Pakistan');

//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key, ':-',value)
// }



