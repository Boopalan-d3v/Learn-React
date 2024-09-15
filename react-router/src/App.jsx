import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home'
import Users from './Pages/users'
import About from './Pages/about'
import Contacts from './Pages/contact'
import Navbar from './Components/Navbar'
import User from './Pages/user'
import { Error } from './Pages/error'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={ <Users />}/>
        <Route path='/user/:userName' element={ <User/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='*' element={ <Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App