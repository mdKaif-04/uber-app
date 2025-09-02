import React from "react";
import uber_car from "../assets/Uber-car.png";

const ConfirmedRide = (props) => {
  return (
    <div>
        <div className="flex relative  ">
             <h3 className="text-2xl pl-2 font-medium -pt-2">Comfirm for a Driver</h3>
                <h5 onClick={()=>{props.setConfirmRidePanel(false)}} className="p-3  absolute  text-gray-800 text-2xl px-2 font-medium -top-3 right-0"><i className="ri-arrow-down-wide-line"></i></h5>
                </div>
      <div className="flex gap-2 flex-col items-center justify-between">
        <img className="h-30" src={uber_car} alt="" />
        <div className="w-full  ">
          <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
            <i className="ri-map-pin-user-fill text-lg" />
            <div>
              <h3 className="text-lg font-medium">72/78</h3>
              <p className="text-sm -mt-1 text-gray-700">
                {" "}
                {props.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
            <i className="ri-map-pin-2-fill text-lg" />
            <div>
              <h3 className="text-lg font-medium">72/78</h3>
              <p className="text-sm -mt-1 text-gray-700">
                {" "}
                {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
            <i className="ri-money-rupee-circle-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-700"> Cash
              </p>
            </div>
          </div>
         
        </div>
        <button onClick={()=>{props.setLookingDriverPanel(true)
        props.setConfirmRidePanel(false)
        props.createRide()
        }} className="w-full bg-green-600  text-white p-3 rounded-lg mt-5 font-semibold" >
          Confirm this Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
