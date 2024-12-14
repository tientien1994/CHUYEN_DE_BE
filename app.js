import express from 'express';
const app = express()
const port = 31000

import { create } from "./mongoAction.js"
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/movies', async (req, res) => {
    res.send(`
        <h2>Create Movie</h2>
        <form action="/movies" method="post">
            <label for="name">Mã phim:</label><br>
            <input type="text" id="code" name="code" value="ASD"><br>
            <label for="name">Tên phim:</label><br>
            <input type="text" id="name" name="name" value="John"><br>
            <label for="description">Mô tả phim:</label><br>
            <input type="text" id="description" name="description" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form> `)
})
app.post('/movies', async (req, res) => {
    let data = {
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
    }
    const status = await create({ collectionName:"movies", data })
    res.send(status ? "Create Success!" : "Create Fail!")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})