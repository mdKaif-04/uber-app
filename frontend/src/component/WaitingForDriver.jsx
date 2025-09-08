import React from "react";
import uber_car from "../assets/Uber-car.png";
import uber_auto from "../assets/uber_auto.png";
import uber_bike from "../assets/uber_bike.png";

const WaitingForDriver = ({ setWaitingDriverPanel,ride }) => {
  return (
    <div>
      <h5 onClick={() => { setWaitingDriverPanel(false);}}
        className="p-3 text-center w-full absolute text-gray-800 text-2xl px-2 font-medium top-1 right-2" >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
        <div className="flex  items-center justify-between">
             <img  className={` ${ride?.captain.vehicle.vehicleType === 'bike' ? "h-35" : ride?.captain.vehicle.vehicleType === 'car' ? 'h-20' : "h-15 mt-4"}`} 
                       src={ride?.captain.vehicle.vehicleType === 'car' ? uber_car : ride?.captain.vehicle.vehicleType === 'auto' ? uber_auto : uber_bike } 
                       alt={`uber ${ride?.captain.vehicle.vehicleType}`} />
             <div className="text-right">
             <h2 className="text-lg text-blue-600 font-medium  capitalize">{ride?.captain.fullname.firstname + " " + ride?.captain.fullname.lastname}</h2>
             <h4 className="text-xl font-semibold -mt-1 -mb-1 text-teal-800 uppercase">{ride?.captain.vehicle.plate}</h4>
             <p className="text-base text-gray-700 pt-2 font-semibold">OTP : <span className="text-red-500 text-lg rounded-md bg-gray-200 font-medium tracking-wider px-1 py-1">{ride?.otp}</span></p>
            </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-4  ">
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-map-pin-user-fill text-lg" />
              <div>
                <h3 className="text-lg font-medium">72/78</h3>
                <p className="text-sm -mt-1 text-sky-700 font-medium">
                  {" "}
                  {ride?.pickup}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-map-pin-2-fill text-lg" />
              <div>
                  <h3 className="text-lg font-medium">72/78</h3>
                 <p className="text-sm -mt-1 text-teal-700 font-medium">
                  {" "}
                  {ride?.destination}
                 </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-money-rupee-circle-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                <p className="text-sm -mt-1 text-green-700 font-semibold"> Cash Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default WaitingForDriver;
