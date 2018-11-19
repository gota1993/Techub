const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser('cipher'))
app.use(express.urlencoded({ extended: true }))


// app.get('/', (req, res) => {
//     res.cookie('username', 'Gocha Tsekvava')
//     res.cookie('cart', { items: [1, 2, 3] })
//     res.cookie('forever', "Forever Value", { maxAge: 6000 })
//     res.cookie('signed', 'random text', {signed: true})
//     res.send('DONE')
// })

// app.get('/cookies', (req, res) => {
//     res.write(`<h3>Username - ${req.cookies.username}</h3>`)
//     res.write(`<h3>Forever - ${req.cookies.forever}</h3>`)
//     res.write(`<h3>Signed - ${req.signedCookies['signed']}</h3>`)
//     res.end()
// })

// app.get('/clear', (req, res) => {
//     res.clearCookie('cart')
//     res.clearCookie('username')
//     res.send('Cookies has been removed')
// })

app.listen(port)
