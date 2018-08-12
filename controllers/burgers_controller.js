const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get("/", (req, res) => {
    burger.all(burgerList => {
        res.render("index", { burgers: burgerList })
    })
})

router.post("/api/add", (req, res) => {
    burger.insertOne(req.body.burgerName, result => {
        res.end()
    })
})

router.put("/api/devour", (req, res) => {
    burger.devourOne(req.body.burgerName, result => {
        res.end()
    })
})


module.exports = router