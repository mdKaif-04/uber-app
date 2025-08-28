import React from "react";
import uber_car from "../assets/Uber-car.png";
import { Link } from "react-router-dom";


const Riding = () => {
  return (
    <div className="h-screen ">
        <Link to='/home' className="fixed h-10 w-10 top-2 right-2  bg-white flex  items-center justify-center rounded-full">
            <i className="ri-home-5-line text-lg font-medium"></i>
        </Link>
      <div className="h-1/2">
        <img
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif "
          className="h-full w-full object-cover "
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
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

        <button className="w-full bg-green-600  text-white p-3 rounded-lg mt-5 font-semibold">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
