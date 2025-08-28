import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainSignUp from './pages/CaptainSignUp'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Error404 from './pages/Error404'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
 const a=  useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/captains-login' element={<CaptainLogin/>} />
        <Route path='/captains-riding' element={<CaptainRiding/>} />
        <Route path='/register' element={<UserSignUp/>} />
        <Route path='/captains-register' element={<CaptainSignUp/>} />
        <Route path='/users/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}  />
        <Route path='*' element={<Error404/>} />



       
      </Routes>
    </div>
  )
}

export default App