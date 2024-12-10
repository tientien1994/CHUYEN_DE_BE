import express from "express";
const app = express();
const port = 31000;


app.get('/exampleA', (req, res) => {
    console.log(x)
    res.send('Hello A!')
})

app.get('/exampleB', (req, res) => {
    res.send('Hello B!')
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Có lỗi xảy ra trong quá trình vận hành!')
  })
  app.use((req, res, next) => {
    res.status(404).send('Không tìm thấy trang');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
