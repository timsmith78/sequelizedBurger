const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require("./controllers/burgers_controller")
app.use(routes)

app.listen(PORT, () => {
    console.log("Server active at http://localhost:" + PORT)
})
