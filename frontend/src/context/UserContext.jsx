import React from 'react'

export const UserDataContext = React.createContext();

const UserContext = ({children}) => {
    const [user, setUser] = React.useState({
        fullName:{
            firstname:"",
            lastname:""
        },
        email:"",
        password:"",
    });

  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext