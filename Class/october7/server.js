const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000
let id = 0
let products = [
    { name: "apple", id: id++, price: 4000 },
    { name: "samsung", id: id++, price: 3000 },
]

let myMid = function (req, res, next) {
    console.log(`${req.ip}, ${req.hostname}, Middleware function`)
    next()
}

let timeLog = function (req, res, next) {
    let time = new Date()
    req.requestTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    next()
}

app.use(express.static(path.join(__dirname, '/public')))
app.use(myMid)
app.use(timeLog)

app.get('/calc', (req, res) => {
    let num_1 = req.query.num_1
    let num_2 = req.query.num_2

    res.sendFile('index.html', {root: path.join(__dirname, 'public',)}) 
})



app.get('/', (req, res) => {
    console.log(`index.html - ${req.requestTime}`)

    // res.json({ text: "Hello text" })
    // res.sendFile(path.join(__dirname, '/public', 'index.html'))
    res.sendFile('index.html')
})

app.get('/admin', (req, res) => {
    res.redirect('/')
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    let product = products.find(p => p.id == id)
    if (!product) {
        // return res.status(404).send("no product found")
        return res.sendStatus(404)
    } else {
        res.json(product)
    }
})

app.get('/productname/:name', (req, res) => {
    const name = req.params.name
    let product = products.find(p => p.name == name)
    if (!product) {
        return res.sendStatus(404)
    } else {
        res.json(product)
    }
})

app.delete('/product/:id', (req, res) => {
    const id = products.findIndex(p => p.id == req.params.id)
    const product = products[id]
    products.splice(id, 1)
    res.json({ message: "product deleted", product })
})

app.post('/product/:id/:name/:price', (req, res) => {
    let newObj = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }
    products.push(newObj)
    res.json({ message: "product added", newObj })
})

app.listen(PORT, () => {
    console.log(`Server on port - ${PORT}`)
})