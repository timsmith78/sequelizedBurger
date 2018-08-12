const orm = require('../config/orm')

const burger = {
    all: cb => {
        orm.selectAll(res => {
            cb(res)
        })
    },
    insertOne: (newBurger, cb) => {
        orm.insertOne(newBurger, res => {
            cb(res)
        })
    },
    devourOne: (burger, cb) => {
        orm.updateOne(burger, res => {
            cb(res)
        })
    }
}

module.exports = burger