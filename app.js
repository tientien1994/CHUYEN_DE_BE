import express from "express";
const app = express();
const port = 31000;

app.get("/country", (req, res) => {
    res.send([
      {
          name: "Việt Nam",
          code: "VN"
      }
    ]);
  });

app.get("/form", (req, res) => {
  res.send(`
    <h2>HTML Forms</h2>

        <form action="/action_page.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
        </form> 

    <p>If you click the "Submit" button, the form-data 
    will be sent to a page called "/action_page.php".</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
