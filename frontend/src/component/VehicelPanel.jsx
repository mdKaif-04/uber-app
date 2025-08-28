import React from 'react'
import uber_car from "../assets/Uber-car.png";
import uber_auto from "../assets/uber_auto.png";
import uber_bike from "../assets/uber_bike.png";

const VehicelPanel = ({setVehiclePanelOpen,setConfirmRidePanel}) => {
  return (
    <div>
         <div className="flex relative  ">
                <h3 className="text-lg font-medium my-2">Choose a vehicle</h3>
                <h5 onClick={()=>{setVehiclePanelOpen(false)}} className="p-3 absolute text-center text-gray-600 text-2xl px-2 py-2 font-medium top-0 right-0"><i className="ri-arrow-down-wide-line"></i></h5>
                </div>
                <div onClick={()=>{setConfirmRidePanel(true)}} className="flex w-full p-3 mb-2 items-center bg-gray-100 rounded-xl border-[#5d6060] active:border justify-between">
                  <img src={uber_car} alt="" className="h-16" />
                  <div className=" w-1/2" >
                    <h4 className="text-base font-medium ">
                      Uber Go{" "}
                      <span className="">
                        <i className="ri-user-3-fill"></i>4
                      </span>
                    </h4>
                    <h5 className="text-sm font-medium ">2 mins away</h5>
                    <p className="text-xs text-gray-600 ">Affordable, compact rides</p>
                  </div>
                  <h2 className="text-md text-gray-900 font-semibold">₹135.7</h2>
                </div>
                <div onClick={()=>{setConfirmRidePanel(true)}} className="flex w-full p-3 mb-2  items-center bg-gray-100 rounded-xl border-[#5d6060] active:border justify-between">
                  <img src={uber_auto} alt="" className="h-12  " />
                  <div className="ml-7 w-1/2" >
                    <h4 className="text-base font-medium ">
                      Uber auto{" "}
                      <span className="">
                        <i className="ri-user-3-fill"></i>3
                      </span>
                    </h4>
                    <h5 className="text-sm font-medium ">2 mins away</h5>
                    <p className="text-xs text-gray-600 ">Affordable, Auto rides</p>
                  </div>
                  <h2 className="text-md text-gray-900 font-semibold">₹135.7</h2>
                </div>
                <div onClick={()=>{setConfirmRidePanel(true)}} className="flex w-full  items-center mb-2 bg-gray-100 rounded-xl border-[#5d6060] active:border justify-between">
                  <img src={uber_bike} alt="" className="h-24 " />
                  <div className="ml-3   w-1/2" >
                    <h4 className="text-base font-medium ">
                      Uber Bike{" "}
                      <span className="">
                        <i className="ri-user-3-fill"></i>1
                      </span>
                    </h4>
                    <h5 className="text-sm font-medium ">2 mins away</h5>
                    <p className="text-xs text-gray-600 ">Affordable, Motorcycle rides</p>
                  </div>
                  <h2 className="text-md text-gray-900 font-semibold pr-4">₹192.3</h2>
                </div>
    </div>
  )
}

export default VehicelPanel