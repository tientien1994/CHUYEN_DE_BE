import express from "express";
const app = express();
const port = 31000;

import animalRoute from "./routes/animal.js"
import fruitRoute from "./routes/fruit.js"

app.use("/animals", animalRoute)
app.use("/fruits", fruitRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
