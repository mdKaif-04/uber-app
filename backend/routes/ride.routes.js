const express = require('express')
const router = express.Router()
const {body} = require('express-validator');
const { createRide } = require('../controllers/ride.controller');
const auth = require('../middleware/auth.middleware')

router.post('/create',auth.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('invalid destination address'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'bike' ]).withMessage('Invalid vehicle type'),
   createRide

)


module.exports = router;