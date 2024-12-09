import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Birds home page')
})
router.get('/:name', (req, res) => {
    const { name } = req.params
  res.send('Animal Name: ' + name)
})

export default router