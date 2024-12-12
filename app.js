import express from 'express';
const app = express()
const port = 31000
import path from 'path'

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("pages/index", {
        page: "index"
    })
})

app.get('/product', (req, res) => {
    res.render("pages/product", {
        page: "product"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})