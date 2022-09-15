const {DataTypes} = require('sequelize')


const { db } = require('../utils/dataBase')


const AccommodationsImage = db.define('accomodations_images', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accommodationsId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accommodation_id'
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = AccommodationsImage