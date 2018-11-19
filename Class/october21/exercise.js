const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use (express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('exercise')
})

app.get('/add', (req, res) => {
    if (!req.query.num_1 || !req.query.num_2) {
        res.sendStatus(400)
    }
    
    let num_1 = Number(req.query.num_1)
    let num_2 = Number(req.query.num_2)
    let arr = []
    function isPrime(num) {
        if (num === 1) return false;
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 || num === 1) {
                return false;
            }
        }
        return true;
    }
    
    function display(min, max) {
        for ( var i = min; i < max; i++) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        console.log(arr)
    }
    
    display(num_1, num_2);

    setTimeout( () => {
        res.send(arr.length.toString())
    }, 2000)

})

app.listen(port, () => {
    console.log(`Started... port - ${port}`)
})