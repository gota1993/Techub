const express = require('express')
const app = express()
const path = require('path')

const port = 3000
let productsDB = []

app.set('view engine', 'pug')
app.set('views', './source/views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Demo Title", 
        added: false, 
        productsDB
    })
})

app.post('/', (req, res) => {
    const { product_name, product_price, product_id } = req.body
    productsDB.push({ product_id, product_name, product_price })
    res.render('index', {
        title: "Demo Title",
        added: true,
        productsDB
    })
})

app.listen(port, () => {
    console.log(`Server on port - ${port}`)
})