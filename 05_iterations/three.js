// for of 

// designed for arrays specially

// const arr = [1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Welcome everyone";
for (const greet of greetings) {  // it will seperate each character in the string
    //  console.log(`each character is ${greet}`)
}

// MAps
const map = new Map()
map.set('PK','Pakistan');
map.set('USA','United States of America');
map.set('FR','France');
map.set('PK','Pakistan');
                                      // THIS WILL BE THE OUTPUT
// console.log(map)                   //  'PK' => 'Pakistan',
                                      //  'USA' => 'United States of America',
                                      //  'FR' => 'France'




for (const [key, value] of map) {     // THIS WILL BE THE OUTPUT
// console.log(key, ':-', value);     //  PK :- Pakistan
                                      //  USA :- United States of America
                                      //  FR :- France
                                      //  PS C:\Users\Web Dev\Desktop\js_hindi> 
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key , value] of myObject) {      // here for of does not work on object
//     console.log(key, ':-',value)
// }



