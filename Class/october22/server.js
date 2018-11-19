const express = require('express');
const path    = require('path')
const app     = express();
let PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`);
})