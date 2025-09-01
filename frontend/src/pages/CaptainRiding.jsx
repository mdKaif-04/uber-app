import React, { useRef, useState } from 'react'
import uber_logo from "../assets/uber_logo.png";
import { Link } from 'react-router-dom';
import FinishRide from '../component/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

      useGSAP(() => {
     if(finishRidePanel){
      gsap.to(finishRidePanelRef.current, {
       transform:'translateY(0%)',
      });
     }else{
      gsap.to(finishRidePanelRef.current, {
       transform:'translateY(100%)',
      });
     }
    },[finishRidePanel])
  
    
  return (
    <div className="h-screen ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img src={uber_logo} alt="" className="h-5 " />
        <Link to="/home" className=" h-10 w-10 shadow-gray-400 shadow-lg  bg-white flex  items-center justify-center rounded-full" >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif "
          className="h-full w-full object-cover "
          alt=""
        />
      </div>
      <div onClick={()=>{setFinishRidePanel(true)}} className="h-1/5 p-6 bg-slate-600 flex items-center justify-between">
      <h4 className='text-xl font-medium text-white'>4kms away</h4>
      <button className=" bg-green-600  text-gray-50 px-8 py-2 rounded-lg text-lg  font-semibold"> Complete Ride</button>
      </div>
        <div ref={finishRidePanelRef}  className="fixed z-10 w-full bottom-0   bg-white px-3 py-6 pt-5 ">
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
      
    </div>
  )
}

export default CaptainRiding