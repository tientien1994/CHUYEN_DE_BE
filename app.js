import express from 'express';
const app = express()
const port = 31000

app.get('/', (req, res) => {
    res.send('root')
})
app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/random.text', (req, res) => {
    res.send('random.text')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})