import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Fruits home page')
})
router.get('/about/:name', (req, res) => {
    const { name } = req.params
  res.send('About fruit: ' + name)
})

export default router