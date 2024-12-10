import express from "express";
const app = express();
const port = 31000;

const auththentications = function (req, res, next) {
    const { role } = req.params
    if(role === "admin"){
        console.log('Người dùng là Admin, lập tức chuyển tới page hello world')
        return next("route")
    }
    console.log(`Người dùng chỉ là ${role}`)
    next()  
}
const requestTime = function (req, res, next) {
    const currentTime = Date.now()
    console.log("Thời gian hiện tại là: " + currentTime)
    next()
}

app.get('/:role', [auththentications, requestTime], (req, res) => {
    res.send('Hello World!')
})


// app.use(requestTime)

// app.get('/time', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
