// ვარიანტი 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

// ვარიანტი 2
async function getJson() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.co/posts/1')
        let json = await response.json
        console.log(json)
    }
    catch (err) {
        console.log(err)
    }
}
getJson()

// Async Function Syntaxes

// Anonymous async function
let func = (async function () {
    //code
})()

// Async function declaration
async function myAsync() {
    //code
}

// Async function assignement
let myAsyncFunc = async function () {
    //code
}

let myAsyncFuncArrow = async () => {
    //code
}

// element.addEventListener('click', async function (event) {})

// Object & Class Methods 
let myObject = {
    async method(){
        //code
    }
}

class MyClass {
    async method(){
        //code
    }
}