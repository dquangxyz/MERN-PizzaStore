import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
          <h1>Pizza Store</h1>
          <p>Welcome to the best pizza in this city!</p>
          <Link to='menu'><button>Order Now</button></Link>        
        </div>
    </div>
  )
}

export default Home