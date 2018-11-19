// ( function (a,b){
//     'use strict'
//     console.log(a,b)
// })(1,3)

let myModule = ( function(){
    let _privateVar = 'Hello world from module'
    let publicProperty = 'This is a public property'

    function _privateMethod (){
        console.log(_privateVar)
    }
    function publicMethod(){
        _privateMethod()
    }
    return {
        publicMethod,
        publicProperty,
        }
}() )

myModule.publicMethod()
console.log(myModule.publicProperty)

// ****** არ გამოაქვს ********
// console.log(myModule._privateVar)
// myModule._privateMethod()