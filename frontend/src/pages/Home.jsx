import React, { useState, useCallback, useEffect, useContext } from "react";
import uber_logo from "../assets/uber_logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import LocationPanel from "../component/LocationPanel";
import VehicelPanel from "../component/VehicelPanel";
import ConfirmedRide from "../component/ConfirmedRide";
import LookingDriver from "../component/LookingDriver";
import WaitingForDriver from "../component/waitingForDriver";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";

const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const vehiclePanelRef = React.useRef(null);
  const lookingDriverPanelRef = React.useRef(null);
  const waitingDriverPanelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const confirmRidePanelRef = React.useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [lookingDriverPanel, setLookingDriverPanel] = useState(false)
  const [waitingDriverPanel, setWaitingDriverPanel] = useState(false)
   const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [fare, setFare] = useState({})
    const [vehicleType, setVehicleType] = useState(null)
    

    const {socket} = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(()=>{
      socket.emit('join',{userType : 'user', userId : user._id})
    })



 const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

 const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

  const handleSumbit = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };
  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.1,
      ease: "power3.out",
    });
  }, [panelOpen]);


  useGSAP(() => {
   if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current, {
     transform:'translateY(0%)',
    });
   }else{
    gsap.to(vehiclePanelRef.current, {
     transform:'translateY(100%)',
    });
   }
  },[vehiclePanelOpen])


  useGSAP(() => {
   if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
     transform:'translateY(0%)',
    });
   }else{
    gsap.to(confirmRidePanelRef.current, {
     transform:'translateY(100%)',
    });
   }
  },[confirmRidePanel])

  useGSAP(() => {
   if(lookingDriverPanel){
    gsap.to(lookingDriverPanelRef.current, {
     transform:'translateY(0%)',
    });
   }else{
    gsap.to(lookingDriverPanelRef.current, {
     transform:'translateY(100%)',
    });
   }
  },[lookingDriverPanel])

  useGSAP(() => {
   if(waitingDriverPanel){
    gsap.to(waitingDriverPanelRef.current, {
     transform:'translateY(0%)',
    });
   }else{
    gsap.to(waitingDriverPanelRef.current, {
     transform:'translateY(100%)',
    });
   }
  },[waitingDriverPanel])

  async function searchTrip(){
    setVehiclePanelOpen(true)
    setPanelOpen(false)
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
     params:{ pickup, destination },
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(response.data)
  }

  async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


    }

  return (
    <div className="h-screen relative overflow-hidden">
             <img src={uber_logo} alt="" className="mix-blend-darken w-15 absolute left-5 top-5"  />
            
      <div  className="w-screen h-screen ">
        {/* temp img */}
        <img
          className="h-full w-full object-cover"
          src="https://www.netmaps.uk/wp-content/uploads/2016/03/Riga-Vector-Map-717x1024.jpg"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[37%] p-6 bg-white relative shadow-md rounded-t-3xl">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              handleSumbit(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[38%] rounded-full bg-[#3d3636]"></div>
            <input
              onClick={() => {
                setActiveField('pickup');
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg  w-full mt-5 border outline-none border-[#767272]"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setActiveField('destination');
                setPanelOpen(true);
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3 border outline-none border-[#767272]"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button onClick={searchTrip} className="bg-black text-white px-4 py-2 rounded-xl mt-3 w-full">Search</button>
        </div>
        <div ref={panelRef} className="h-0 bg-white ">
          <LocationPanel
            suggestions={activeField === 'pickup'? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPickup = {setPickup}
            setDestination = {setDestination}
            activeField ={activeField}
           
          />
        </div>
      </div>
      <div ref={vehiclePanelRef}  className="fixed z-10 w-full bottom-0  translate-y-full bg-white px-3 py-8 pt-12 ">
          <VehicelPanel selectVehicle={setVehicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef}  className="fixed z-10 w-full bottom-0  translate-y-full bg-white px-3 py-6 pt-12 ">
          <ConfirmedRide fare={fare} vehicleType={vehicleType} pickup={pickup} destination={destination} createRide={createRide} setConfirmRidePanel={setConfirmRidePanel} setLookingDriverPanel={setLookingDriverPanel} />
      </div>
      <div ref={lookingDriverPanelRef}  className="fixed z-10 w-full bottom-0  translate-y-full bg-white px-3 py-6 pt-12 ">
          <LookingDriver fare={fare} vehicleType={vehicleType} pickup={pickup} destination={destination} createRide={createRide}  setLookingDriverPanel={ setLookingDriverPanel }/>
      </div>
      <div ref={waitingDriverPanelRef}  className="fixed z-10 w-full bottom-0 translate-y-full  bg-white px-3 py-6 pt-12 ">
          <WaitingForDriver setWaitingDriverPanel={setWaitingDriverPanel}/>
      </div>
    </div>
  );
};

export default Home;
