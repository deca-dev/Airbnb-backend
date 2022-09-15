const uuid = require('uuid')
const Reservations = require('../models/reservations.models')
const Users = require('../models/user.model')
const Accommodations = require('../models/accommodations.models')

const getAllReservations = async() => {
    const data = await Reservations.findAll({
        include: [
            {
                model: Users,
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
                }
            },
            {
                model: Accommodations,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
                }
            }
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const createReservation = async(data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const newReservation = await Reservations.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservation
}


module.exports = {
    createReservation,
    getAllReservations
}