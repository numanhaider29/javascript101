// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
// console.log("inner: ",a)
}

function one ()
{
    const username = "Nouman"
    function two ()
    {
    const website = "youtube" 
    //console.log(username)
    }
    // console.log(website)
     two()
}
one()
    

//  console.log(a)
// console.log(b)
// console.log(c)

if (true) {
    const username = "Nouman Haider"
    if(username === "Nouman Haider")
    {
        const website = " youtube"
        //console.log(username + website)
    }
    // console.log(website);
}
// console.log(username)
// ++++++++++++++++++++++++ important ++++++++++++++++++++++++

function addone(num){
return num+1
}
addone(5)

const addTwo = function (num){
return num+2
}
addTwo(5)