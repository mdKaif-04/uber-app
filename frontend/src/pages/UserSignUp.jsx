import React, { useState } from "react";
import uber_logo from "../assets/uber_logo.png";
import { Link, useNavigate } from "react-router-dom";
import {UserDataContext} from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";

const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserDataContext)
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser= {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
        email : email,
        password: password
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      if(response.status === 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
     
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src={uber_logo} alt="" className="w-16 mb-5" />

        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h3 className="text-lg font-medium mb-2">what's your Name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="welcome@uber.com"
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
          <button className="bg-[#111] text-white text-xl font-semibold mb-7 border-none rounded-lg px-4 py-2  w-full">
            Create Account
          </button>
        </form>
          <p className="text-center font-medium ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, whatsApp or SMS messages,
           including by automated means, from Uber and its affiliates to the number provided</p>
        
      </div>
    </div>
  );
};

export default UserSignUp;
