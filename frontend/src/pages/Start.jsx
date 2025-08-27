import React from 'react'
import uber_logo from '../assets/uber_logo.png'
import welcomeImage from '../assets/uber_welcome.png'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        
        <div className='h-screen w-full flex flex-col pt-8  justify-between bg-cover' style={{backgroundImage: `url(${welcomeImage})`}}>
            <img src={uber_logo} alt="" className='mix-blend-darken w-15 ml-8' />
            <div className='bg-white pb-7 px-4 py-4'>
                <h2 className='text-[30px] font-bold'>Get started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start