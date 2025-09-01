const rideModel = require("../models/ride.model");
const mapService = require("./map.services");
const crypto = require('crypto')

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and Destination are required");
  }
  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const baseFare = {
    bike: 20,
    auto: 30,
    car: 50,
  };

  const perKmRate = {
    bike: 12,
    auto: 15,
    car: 20,
  };
  const perMinuteRate = {
    bike: 1,
    auto: 1.5,
    car: 2,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    bike: Math.round(
      baseFare.bike +
        (distanceTime.distance.value / 1000) * perKmRate.bike +
        (distanceTime.duration.value / 60) * perMinuteRate.bike
    ),
  };
  return fare;
}

function getOtp(num){
    return crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();

}
module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All field are required");
  }
  const fare = await getFare(pickup, destination);
  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp : getOtp(6),
    fare: fare[vehicleType],
  });
  return ride;
};
