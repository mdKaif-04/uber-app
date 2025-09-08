import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import uber_logo from "../assets/uber_logo.png";
import CaptainDetails from "../component/CaptainDetails";
import RidePopUp from "../component/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../component/ConfirmRidePopUp";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";
import axios from "axios";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
      const ridePopUpPanelRef = useRef(null)
      const confirmRidePopUpPanelRef = useRef(null)
      const [ ride, setRide ] = useState(null)

       const { socket } = useContext(SocketContext)
    const { captain } = useContext(CaptainDataContext)

     useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                  // console.log( {userId: captain._id,
                  //       location: {
                  //           ltd: position.coords.latitude,
                  //           lng: position.coords.longitude
                  //       }})

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

        // return () => clearInterval(locationInterval)
    }, [])

    socket.on('new-ride', (data) => {
        setRide(data)
        setRidePopUpPanel(true)

    })

    async function confirmRide() {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

            rideId: ride._id,
            captainId: captain._id,


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setRidePopUpPanel(false)
        setConfirmRidePopUpPanel(true)

    }

  
       useGSAP(() => {
     if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current, {
       transform:'translateY(0%)',
      });
     }else{
      gsap.to(ridePopUpPanelRef.current, {
       transform:'translateY(100%)',
      });
     }
    },[ridePopUpPanel])

       useGSAP(() => {
     if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current, {
       transform:'translateY(0%)',
      });
     }else{
      gsap.to(confirmRidePopUpPanelRef.current, {
       transform:'translateY(100%)',
      });
     }
    },[confirmRidePopUpPanel])



  return (
    <div className="h-screen ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img src={uber_logo} alt="" className="h-5" />
        <Link to="/home" className=" h-10 w-10 shadow-gray-400 shadow-lg  bg-white flex  items-center justify-center rounded-full" >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif "
          className="h-full w-full object-cover "
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
       <CaptainDetails/>
      </div>
        <div ref={ridePopUpPanelRef}  className="fixed z-10 w-full bottom-0   bg-white px-3 py-6 pt-5 ">
          <RidePopUp ride={ride} confirmRide={confirmRide} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
        <div ref={confirmRidePopUpPanelRef}  className="fixed z-10 h-screen w-full bottom-0   bg-white px-3 py-6 pt-5 ">
          <ConfirmRidePopUp ride={ride} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
