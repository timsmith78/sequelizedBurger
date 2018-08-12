const cxn = require('./connection')

const orm = {
    selectAll: cb => {
        const queryString = "SELECT * FROM burgers"
        cxn.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: (newBurger, cb) => {
        const queryString = "INSERT INTO burgers SET ?"
        cxn.query(queryString, [{ burger_name: newBurger }], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: (devourBurger, cb) => {
        const queryString = "UPDATE burgers SET devoured=1 WHERE ?"
        cxn.query(queryString, [{ burger_name: devourBurger }], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm