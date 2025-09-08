import React, { useState } from 'react'
import profile_dp from "../assets/profileDP.jpg";
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmRidePopUp = ({setConfirmRidePopUpPanel,setRidePopUpPanel,ride}) => {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            setConfirmRidePopUpPanel(false)
            setRidePopUpPanel(false)
            navigate('/captains-riding', { state: { ride: ride } })
        }

  }
  return (
     <div className=''>
                <div className="flex relative   ">
                     <h3 className="text-2xl pl-2 mb-3 font-medium -pt-2">Confirm ride</h3>
                        <h5 onClick={()=>{setConfirmRidePopUpPanel(false)}} className="p-3  absolute  text-gray-800 text-2xl px-2 font-medium -top-3 right-0"><i className="ri-arrow-down-wide-line"></i></h5>
                        </div>
                        <div className='flex items-center justify-between  shadow-md bg-slate-200 p-1 rounded-lg shadow-blue-200 my-2 '>
                        <div className='flex items-center gap-3 mt-3'>
                            <img src={profile_dp} alt=""  className='w-12 h-12 rounded-full object-cover'/>
                            <h2 className='text-xl font-medium capitalize'>{ride?.user.fullname.firstname + " " + ride?.user.fullname.lastname}</h2>
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
              <div className='mt-6 w-full '>
                <form onSubmit={handleSubmit}>
                  <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="number" placeholder='Enter OTP' className="bg-[#eee] px-6 py-4 text-lg font-mono mb-3 rounded-lg w-full mt-3 border outline-none border-[#767272]" />
                    <button type='submit' className="w-full flex items-center mb-3 justify-center bg-green-600  text-gray-50 p-3 rounded-lg text-lg  font-semibold" >
                  Confirm this Ride
                </button>
                <button onClick={()=>{setConfirmRidePopUpPanel(false)
                setRidePopUpPanel(false)
                }} className="w-full bg-red-600 text-white text-lg    p-3 rounded-lg  font-semibold" >
                  Cancel this Ride
                </button>
                </form>
              </div>
              </div>
            </div>
  )
}

export default ConfirmRidePopUp