
const db = require('../models')

module.exports = app => {
    app.get("/", (req, res) => {
        db.Burger.findAll({}).then(result => {
            res.render("index", { burgers: result } )
        })
    })
    app.post("/api/add", (req, res) => {
        db.Burger.create({
            burger_name: req.body.burgerName,
            devoured: 0
        }).then(result => {
            console.log('api/add callback hit')
            res.end()
        })
    })

    app.put("/api/devour", (req, res) => {
        db.Burger.update(
            {
                devoured: 1
            },
            {
                where: {
                    burger_name: req.body.burgerName
                }
            }).then(result => {
                res.json(result)
            })
    })

}
