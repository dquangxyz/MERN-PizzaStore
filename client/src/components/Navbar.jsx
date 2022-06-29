import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/pizzaLogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close" }>
            <Link to="/" ><img src={logo}/></Link>
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
            </div>          
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <button><ReorderIcon onClick={() => {setOpenLinks(!openLinks)}} /></button>
            <Link to="/cart"><AiOutlineShoppingCart color="white" style={{height:"1.5rem", width:"1.5rem"}} /></Link>
        </div>
    </div>
  )
}

export default Navbar