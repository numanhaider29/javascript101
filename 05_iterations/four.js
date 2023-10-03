//  loops on objects

const myObject = {
    js : 'Javascript',
    cpp: 'c++',
    rb : 'Ruby on Rails',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js","rb","cpp","py"]

for (const key in programming) {
    // console.log(programming[key])
}


// const map = new Map()                    // for in doesnot work on maps
// map.set('PK','Pakistan');
// map.set('USA','United States of America');
// map.set('FR','France');
// map.set('PK','Pakistan');

// for (const key in map) {   // for in loop does not work on map 
// console.log(key)    
    
// }


