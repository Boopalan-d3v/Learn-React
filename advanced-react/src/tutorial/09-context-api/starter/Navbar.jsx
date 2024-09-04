import React, { useContext } from 'react'
import { NavLinks } from './NavLinks'
import { useState , createContext} from 'react'

export const NavbarContext = createContext()

//custom hook 
export const useAppContext = () => {
    return useContext(NavbarContext)
}

const Navbar = () => {
    const [user, setUser] = useState({name:'dev'})
    const login = () =>{
        setUser({name:'dev'})
    }
    const logout = () => {
        setUser(null)
    }
  return (
    <NavbarContext.Provider value={{user, login, logout}}>
    <nav className='nav-container'>
        <h5>Context Api </h5>
        <NavLinks />
    </nav>
    </NavbarContext.Provider>
    )
}
export default Navbar