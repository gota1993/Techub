const express = require('express');
const app = express()
const path = require('path');
const multer = require('multer');
const PORT = process.env.PORT || 3000

app.use( express.static(path.join(__dirname, '/public')))
app.set('view engine', 'pug')
app.set('views', './public/views')

const multerConfig = multer ({
    dest: 'public/uploads'
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'upload.html'))
})

app.post('/', multerConfig.single('image'), (req, res) => {
    const userName = req.body.username
    const imgUrl = path.join('uploads', req.file.filename) 
    res.render('index', {imgUrl, userName})
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} has been started`)
})