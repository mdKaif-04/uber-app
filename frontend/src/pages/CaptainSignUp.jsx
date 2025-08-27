import React, { useState } from "react";
import { Link } from "react-router-dom";
import uber_Captain from '../assets/uber_captain_logo.png'
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CaptainSignUp = () => {

  const navigate = useNavigate()
   const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
  
     const handleSubmit = async(e) => {
      e.preventDefault();
      const captainData = {
        fullname:{
          firstname: firstName,
          lastname: lastName
        },
          email : email,
          password: password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
          }
        
        };
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        if(response.status === 201){
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token',data.token)

          localStorage.setItem('token', response.data.token)
          navigate('/captain-home')
        }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity(""); 
      setVehicleType("");
      }
  return (
      <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={uber_Captain} alt="" className="w-16 mb-5" />

        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h3 className="text-lg font-medium mb-2">what's your name Captain</h3>
            <div className="flex gap-4 mb-5 ">

          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="first name"
            className="bg-[#eeeeee] w-1/2 outline-none  rounded px-4 py-2 border border-[#767272]  text-lg placeholder:text-base"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="last name"
            className="bg-[#eeeeee] w-1/2  outline-none rounded px-4 py-2 border border-[#767272]  text-lg placeholder:text-base"
          />
            </div>
          <h3 className="text-lg font-medium mb-2">What's your email Captain</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="welcomeCaptain@uber.com"
            className="bg-[#eeeeee] outline-none mb-6 rounded px-4 py-2 border border-[#767272] w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="set password"
            className="bg-[#eeeeee] mb-6 outline-none rounded px-4 py-2 border border-[#767272] w-full text-lg placeholder:text-base"
          />
           <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white text-xl font-semibold mb-7 border-none rounded-lg px-4 py-2  w-full">
            Create Account
          </button>
        </form>
          <p className="text-center mb-3 font-medium ">
            Already have an account?{" "}
            <Link to="/captains-login" className="text-blue-600">
              Login here
            </Link>
          </p>
      </div>
      <div>
      <p className="text-[10px] mb-2 leading-tight">This site is protected  by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply</p>
      </div>
    </div>
  )
}

export default CaptainSignUp