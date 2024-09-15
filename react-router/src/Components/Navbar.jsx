import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <navbar>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </navbar>
  )
}

export default Navbar