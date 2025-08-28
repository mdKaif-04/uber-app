import React from "react";
import profile_dp from "../assets/profileDP.jpg";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex  items-center justify-between ">
        <div className="flex items-center gap-3 justify-between">
          <img
            src={profile_dp}
            alt=""
            className="h-12 w-12 object-cover rounded-full"
          />
          <h4 className="text-lg font-medium">John Doe</h4>
        </div>
        <div>
          <h4 className="text-lg font-medium"> ₹295.40</h4>
          <p className="text-sm text-center rounded-lg text-slate-700 font-medium tracking-widest px-1 bg-gray-300">
            Earned
          </p>
        </div>
      </div>
      <div className="flex justify-center p-2 bg-gray-100 rounded-xl mt-4  items-start">
        <div className="text-center border-r-2 border-gray-600 px-3">
          <i className=" text-2xl  font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">3.1</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center border-r-2 border-gray-600 px-3">
          <i className=" text-2xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">3km</h5>
          <p className="text-sm text-gray-600">estimated distance</p>
        </div>
        <div className="text-center   px-3">
          <i className=" text-2xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">3.1</h5>
          <p className="text-sm text-gray-600">notes keeping</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
