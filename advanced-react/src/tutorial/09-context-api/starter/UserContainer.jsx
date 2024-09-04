import React from 'react'
import { useAppContext } from './Navbar'

export const UserContainer = () => {
 const {user, login, logout} = useAppContext();
  return (
    <div className='user-container'>
        {user?(<div><p>Hello , {user?.name?.toUpperCase()}</p>
        <button  className='btn' onClick={logout}>Logout</button></div>): (<div><p>Please Login</p>
        <button  className='btn' onClick={login}>Login</button></div>)}
    </div>
  )
}
