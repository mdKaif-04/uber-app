import React, { useContext } from "react";
import uber_logo from "../assets/uber_logo.png";
import { Link } from "react-router-dom";
// import user_login from '../assets/uber_login.png'
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between ">       {/*  style={{backgroundImage: `url(${user_login})`}} */}

      <div>
        <img src={uber_logo} alt="" className="w-16 mb-5" />

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="welcomeBack@uber.com"
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
            New here?{" "}
            <Link to="/register" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captains-login"
          className="bg-[#0d6237] flex items-center justify-center text-white text-xl  font-semibold mb-7 border-none rounded-lg px-4 py-2  w-full "
        >
          Are you a Captain?
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
