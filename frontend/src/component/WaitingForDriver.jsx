import React from "react";
import uber_car from "../assets/Uber-car.png";

const WaitingForDriver = ({ setWaitingDriverPanel }) => {
  return (
    <div>
      <h5 onClick={() => { setWaitingDriverPanel(false);}}
        className="p-3 text-center w-full absolute text-gray-800 text-2xl px-2 font-medium top-1 right-2" >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
        <div className="flex  items-center justify-between">
             <img className="h-15" src={uber_car} alt="" />
             <div className="text-right">
             <h2 className="text-lg text-slate-900 font-medium">John Doe</h2>
             <h4 className="text-xl font-semibold -mt-1 -mb-1">ab-12-cd-2943</h4>
             <p className="text-sm text-gray-700">Maruti Alto K-10</p>
            </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-4  ">
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-map-pin-user-fill text-lg" />
              <div>
                <h3 className="text-lg font-medium">72/78</h3>
                <p className="text-sm -mt-1 text-gray-700">
                  {" "}
                  kumbha marg,tonk road, pratapnagar, jaipur
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-map-pin-2-fill text-lg" />
              <div>
                  <h3 className="text-lg font-medium">72/78</h3>
                 <p className="text-sm -mt-1 text-gray-700">
                  {" "}
                  kumbha marg,tonk road, pratapnagar, jaipur
                 </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
              <i className="ri-money-rupee-circle-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">₹194.20</h3>
                <p className="text-sm -mt-1 text-gray-700"> Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default WaitingForDriver;
