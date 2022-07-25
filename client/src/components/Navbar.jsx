import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/pizzaLogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar() {
    const [openToggle, setOpenToggle] = useState(false)

  return (
    <div className='navbar'>
        <a href="/"><img src={logo} id="brand-logo"/></a>
        <button className='toggle-button'><ReorderIcon onClick={() => {setOpenToggle(!openToggle)}} /></button>
        <div className='navbar-links' id={openToggle ? "open" : "close"}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart"><AiOutlineShoppingCart color="white" style={{height:"1.5rem", width:"1.5rem"}} /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar