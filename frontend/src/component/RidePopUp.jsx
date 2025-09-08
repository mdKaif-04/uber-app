import React, { useRef } from 'react'
import profile_dp from "../assets/profileDP.jpg";


const RidePopUp = ({setRidePopUpPanel,setConfirmRidePopUpPanel,ride,confirmRide}) => {
    
  return (
        <div className=''>
            <div className="flex relative   ">
                 <h3 className="text-2xl pl-2  font-medium -pt-2">New Ride Available</h3>
                    <h5 onClick={()=>{setRidePopUpPanel(false)}} className="p-3  absolute  text-gray-800 text-2xl px-2 font-medium -top-3 right-0"><i className="ri-arrow-down-wide-line"></i></h5>
                    </div>
                    <div className='flex items-center justify-between  shadow-md bg-slate-200 p-1 rounded-lg shadow-blue-200 my-2 '>
                    <div className='flex items-center gap-3 mt-3'>
                        <img src={profile_dp} alt=""  className='w-12 h-12 rounded-full object-cover'/>
                        <h2 className='text-xl font-medium'>{ride?.user.fullname.firstname + " " + ride?.user.fullname?.lastname}</h2>
                    </div>
                    <h5>2.2 KM</h5>
                    </div>
          <div className="flex gap-2 flex-col items-center justify-between">
            <div className="w-full  ">
              <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
                <i className="ri-map-pin-user-fill text-lg" />
                <div>
                  <h3 className="text-lg font-medium">72/78</h3>
                  <p className="text-sm -mt-1 text-gray-700">
                    {" "}
                    {ride?.pickup}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
                <i className="ri-map-pin-2-fill text-lg" />
                <div>
                  <h3 className="text-lg font-medium">72/78</h3>
                  <p className="text-sm -mt-1 text-gray-700">
                    {" "}
                    {ride?.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-2 border-b-[0.1px] border-gray-400">
                <i className="ri-money-rupee-circle-fill text-lg"></i>
                <div>
                  <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                  <p className="text-sm -mt-1 text-gray-700"> Cash
                  </p>
                </div>
              </div>
             
            </div>
            <div className='flex w-full items-center gap-8 mt-4'>
            <button onClick={()=>{setConfirmRidePopUpPanel(true)
            confirmRide()}}
             className="w-full bg-green-600  text-gray-50 px-8 py-2 rounded-lg text-lg  font-semibold" >
              Accept
            </button>
            <button onClick={()=>{setRidePopUpPanel(false)
            }} className="w-full bg-blue-200 text-gray-900 text-lg    px-8 py-2 rounded-lg  font-semibold" >
              Ignore 
            </button>
                </div>
          </div>
        </div>
  )
}

export default RidePopUp