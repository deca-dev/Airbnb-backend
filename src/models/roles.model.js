const {DataTypes} = require('sequelize')


const { db } = require('../utils/dataBase')


const Roles = db.define('roles', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Roles