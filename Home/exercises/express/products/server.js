const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('cipher'))

let GraphicCard = {
    productName: 'Graphic Card',
    productPrice: 400,
    productDesc: 'MSI GTX 1070',
    productImg: 'https://www.bhphotovideo.com/images/images2500x2500/msi_gtx_1070_gaming_x_8g_geforce_gtx_1070_gaming_1260393.jpg',
    productValue: 'graphic',
    quantity: 0,
}

let HDMIcable = {
        productName: 'HDMI Cable',
        productPrice: 5,
        productDesc: 'HDMI Cable 2 meter',
        productImg: 'https://sgcdn.startech.com/005329/media/products/gallery_large/HDMM30MA.MAIN.jpg',
        productValue: 'hdmi',
        quantity: 0,
    }

let SSDdrive = { 
    productName: 'SSD Drive',
    productPrice: 100,
    productDesc: 'Kingston SSD Drive 480GB',
    productImg: 'https://media.kingston.com/images/products/SV300S37A_480GB_hr.jpg',
    productValue: 'ssd',
    quantity: 0,
}

app.get('/', (req, res) => {
    res.render('main')
})

app.get('/graphic', (req, res) => {
    res.render('products', GraphicCard)
})

app.post('/graphic', (req, res) => {
    GraphicCard.quantity += parseInt(req.body.graphic)
    res.render('products', GraphicCard)
})

app.get('/hdmi', (req, res) => {
    res.render('products', HDMIcable)
})

app.post('/hdmi', (req, res) => {
    HDMIcable.quantity += parseInt(req.body.hdmi)
    res.render('products', HDMIcable)
})

app.get('/ssd', (req, res) => {
    res.render('products', SSDdrive)
})

app.post('/ssd', (req, res) => {
    SSDdrive.quantity += parseInt(req.body.ssd)
    res.render('products', SSDdrive)
})

app.get('/summary', (req, res) => {
    res.render('sum', {
        graphicQuantity: GraphicCard.quantity,
        hdmiQuantity: HDMIcable.quantity,
        ssdQuantity: SSDdrive.quantity
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})