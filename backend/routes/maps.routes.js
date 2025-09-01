const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.middleware')
const { query } = require('express-validator')
const { getCoordinates, getDistanceTime, getAutoCompleteSuggestions } = require('../controllers/maps.controller')

router.get('/get-coordinates',query('address').isString().isLength({min:3}),auth.authUser,getCoordinates)
router.get('/get-distance-time',query('origin').isString().isLength({min : 3}),auth.authUser,getDistanceTime)
router.get('/get-suggestions',query('input').isString().isLength({min : 3}),auth.authUser,getAutoCompleteSuggestions)



module.exports = router;