function doAsync() {
    let p = new Promise(function (resolve, reject) {
        console.log('in promise code')
        setTimeout(function () {
            console.log('resolving')
            // console.log('rejecting')
            resolve()
            // reject( new Error('Something went wrong'))
        }, 2000)
    });
    return p;
}

//Promise.resolve()
//Promise.reject()
//Primise.all(iterables)
//Promise.race(iterables)

// // let promise = doAsync()
// doAsync().then(function(){
//     console.log('Fulfilled')
// }, function (error){
//     console.log(error.message)
// })

doAsync().then(function(){
    console.log('Fulfilled')
    return ['AAA']
})
.then((msg) => {
    console.log(msg)
})
.catch(function (error){
    console.log(error.message)
})

