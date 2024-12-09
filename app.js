import express from 'express';
const app = express()
const port = 31000

app.get('/ab?cd', (req, res) => { res.send('ab?cd') })
app.get('/ab+cd', (req, res) => { res.send('ab+cd') })
app.get('/ab*cd', (req, res) => { res.send('ab*cd') })
app.get('/ab(cd)?e', (req, res) => { res.send('ab(cd)?e') })
app.get(/a/, (req, res) => {
    res.send('/a/')
})
app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})