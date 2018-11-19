const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser('cipher'))

app.get('/', (req, res) => {
    res.render('index', {color: req.cookies.color || 'white'})
})

app.post('/', (req, res) => {
    res.cookie('color', req.body.color)
    res.render('index', {color: req.body.color})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})