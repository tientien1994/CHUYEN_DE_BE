import express from "express";
const app = express();
const port = 31000;
import bodyParser from "body-parser";

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded())
app.get('/form-post', (req, res) => {
    res.send(`
        <form action="/form-post" method="post">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
        </form> `)
})
app.post('/form-post', (req, res) => {
    const body = req.body
    console.log({body})
    res.send(`Du lieu nhan duoc la: ${body?.fname} ${body?.lname}`)

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
