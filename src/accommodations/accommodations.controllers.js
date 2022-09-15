const Accommodations = require('../models/accommodations.models')
const Places = require('../models/places.models')
const Users = require('../models/user.model')


const getAllAccommodations = async () => {
    const data = await Accommodations.findAll({
        include: [{
            model: Places,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }, {
            model: Users,
            as: 'user',
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
            }
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
        }
    })
    // const data = await Users.findAll({
    //     include: {
    //         model: Accommodations,
    //         include: {
    //             model: Places,
    //             attributes: {
    //                 exclude: ['createdAt', 'updatedAt']
    //             }
    //         },
    //         attributes: {
    //             exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
    //         }
    //     },
    //     attributes: {
    //         exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
    //     }
    // })
    return data
}


const getAccommodationById = async (id) => {
    const data = await Accommodations.findOne({
        where: {
            id,
        },
        include: [{
            model: Places,
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        }, {
            model: Users,
            as: 'user',
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        }
        ],
        attributes: {
            exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
        },
    });
    return data;
};


module.exports = {
    getAllAccommodations,
    getAccommodationById
}