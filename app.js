import express from 'express';
const app = express()
const port = 31000
import path from 'path'
const __dirname = path.resolve()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})