const express = require('express')
const crypto = require('crypto')
const cors = require('cors')

const app = express()
const secret = 'demo__system'

const encrypt = data => {
    const hash = crypto.createHmac('sha256', secret)
        .update(data)
        .digest('hex')
    return hash
}

app.use(cors('*'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const User = {
    username: 'Admin',
    password: encrypt('Admin123')
}

app.get('/', (req, res) => {
    res.send('Hello')
})



app.post('/login', (req, res) => {
    res.json({
        username: req.body.username,
        password: encrypt(req.body.password),
        User,
        auth: true
    })
})

app.listen(5000, () => {
    console.log('Port - 5000');
})