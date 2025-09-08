const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const {createRide, getFare, confirmRide, startRide, endRide,} = require("../controllers/ride.controller");
const auth = require("../middleware/auth.middleware");

router.post(
  "/create",
  auth.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "bike"])
    .withMessage("Invalid vehicle type"),
  createRide
);

router.get(
  "/get-fare",
  auth.authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid destination address"),
  getFare
);

router.post(
  "/confirm",
  auth.authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride id"),
  confirmRide
);

router.get(
  "/start-ride",
  auth.authCaptain,
  query("rideId").isMongoId().withMessage("Invalid ride id"),
  query("otp").isString().isLength({ min: 6, max: 6 }).withMessage("Invalid OTP"),
  startRide
);

router.post('/end-ride',
    auth.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    endRide
)

module.exports = router;
