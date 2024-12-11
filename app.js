import express from 'express';
const app = express()
const port = 31000
import path from 'path'
const __dirname = path.resolve()
import ejs from 'ejs';

app.set('view engine', 'ejs')

// ejs.delimiter = '?';
app.get('/home', (req, res) => {
    res.render("home", {
        type: "trai_cay",
    })
})
app.get('/category', (req, res) => {
    res.render("category", {
        name: "Trái cây trong nước",
        listProduct: ["Cam", "Bưởi", "Xoài"],
        listProduct2: [["Cam", "Bưởi", "Xoài"], ["1", "2", "3"], ["qq", "ww", "ee"]]
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})