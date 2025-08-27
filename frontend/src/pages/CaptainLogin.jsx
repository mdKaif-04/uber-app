import React from 'react'
import uber_Captain from '../assets/uber_captain_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {captain,setCaptain} = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

      const handleSubmit = async(e) => {
        e.preventDefault();
        const captain = { email: email, password: password };
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
        if(response.status === 200){
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
        setEmail("");
        setPassword("");
      };
  return (
     <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img src={uber_Captain} alt="" className="w-20 mb-5" />
    
            <form onSubmit={(e)=>{handleSubmit(e)}}>
              <h3 className="text-lg font-medium mb-2">What's your email</h3>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="welcomeBackCaptain@uber.com"
                className="bg-[#eeeeee] outline-none mb-7 rounded px-4 py-2 border border-[#767272] w-full text-lg placeholder:text-base"
              />
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="your password"
                className="bg-[#eeeeee] mb-7 outline-none rounded px-4 py-2 border border-[#767272] w-full text-lg placeholder:text-base"
              />
              <button className="bg-[#111] text-white text-xl font-semibold mb-7 border-none rounded-lg px-4 py-2  w-full placeholder:text-base">
                Login
              </button>
              <p className="text-center font-medium ">
                want to join us?{" "}
                <Link to="/captains-register" className="text-blue-600">
                  register as a Captain
                </Link>
              </p>
            </form>
          </div>
          <div>
            <Link
              to="/login"
              className="bg-[#d5622d] flex items-center justify-center text-white text-xl  font-semibold mb-7 border-none rounded-lg px-4 py-2  w-full "
            >
              sign in as User?
            </Link>
          </div>
        </div>
  )
}

export default CaptainLogin