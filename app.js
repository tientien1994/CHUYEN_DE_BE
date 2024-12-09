import express from 'express';
const app = express()
const port = 31000

import path from 'path'
const __dirname = path.resolve()

app.use('/staticFile', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})