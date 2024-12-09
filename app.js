import express from 'express';
const app = express()
const port = 31000

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.get('/secret', (req, res) => {
    res.send('GET request to the secret page')
})

app.post('/secret', (req, res) => {
    res.send('POST request to the secret page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})