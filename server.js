const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080

const app = express()

// Configure express
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configure handlebars
const exphbs = require('express-handlebars')
app.engine("handlebars", exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

// Link controller
const routes = require("./controllers/burgers_controller")
app.use(routes)

// Start server
app.listen(PORT, () => {
    console.log("Server active at http://localhost:" + PORT)
})
