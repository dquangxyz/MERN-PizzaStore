import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ac turpis egestas integer eget aliquet nibh. Cursus sit amet dictum sit amet justo donec enim diam. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sed arcu non odio euismod lacinia at quis risus sed. Vivamus arcu felis bibendum ut tristique et. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Fermentum odio eu feugiat pretium nibh. Dolor morbi non arcu risus quis varius quam quisque id.</p>
        </div>
    </div>
  )
}

export default About