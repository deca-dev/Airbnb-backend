const router = require('express').Router()
const passport = require('passport')

const AccommodationServices = require('./accommodations.http')
const reservationsServices = require('../reservations/reservations.http')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(AccommodationServices.getAll)

router.route('/:id')
    .get(AccommodationServices.getById)

router.route('/:id/make-reservation')
    .post(passport.authenticate('jwt', {session: false}),reservationsServices.postReservation)

exports.router = router

