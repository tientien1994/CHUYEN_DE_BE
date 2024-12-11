import express from "express";
const app = express();
const port = 31000;

app.get('/form', (req, res) => {
    const queryString = req.query
    
    res.send(`
        <form action="/form">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
        </form> 
        <p>Du lieu duoc truyen vao la: ${req.query?.fname || ""} ${req.query?.lname || ""} </p>
    `)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
