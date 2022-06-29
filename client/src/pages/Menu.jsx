import React, { useState } from 'react'
// import {MenuList} from '../components/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
import axios from "axios"

function Menu() {
  const [MenuList, setMenuList] = useState([])
  axios.get("http://localhost:3001/menu-database").then((res) => {
    setMenuList(res.data)
  })

  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((item, key) => { 
              return  <MenuItem 
                key={key} 
                name={item.name} 
                image={item.image}
                price={item.price} 
                description={item.description} 
                ingredients={item.ingredients}
              />
            })}
        </div>
    </div>
  )
}

export default Menu