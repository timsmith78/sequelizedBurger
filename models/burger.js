
module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                is: /0|1/
            }
        }
    })
    return Burger
}

