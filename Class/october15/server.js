const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser())
app.use(session({
    secret: 'super cat',
    name: 'demo-site',
    resave: true,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if (req.session.viewCount) {
        req.session.viewCount++
        res.send(`you visited this page ${req.session.viewCount} times`)
    } else {
        req.session.viewCount = 1
        res.send('Welcome to demo site')
    }
})

app.get('/contact', (req, res) => {
    if (req.session.viewCountContact) {
        req.session.viewCountContact++
        res.send(`you visited this page ${req.session.viewCountContact} times`)
    } else {
        req.session.viewCountContact = 1
        res.send('Welcome to demo site')
    }
})

app.get('/home', (req, res) => {
    if (req.session.viewCountHome) {
        req.session.viewCountHome++
        res.send(`you visited this page ${req.session.viewCountHome} times`)
    } else {
        req.session.viewCountHome = 1
        res.send('Welcome to demo site')
    }
})

app.listen(port, () => {
    console.log(`Started... port - ${port}`)
})