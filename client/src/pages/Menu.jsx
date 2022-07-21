import React, { useEffect, useState } from 'react'
// import {MenuList} from '../components/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
import axios from "axios"

function Menu() {
  const [MenuList, setMenuList] = useState([])
  useEffect(() => {
    axios.get("/menu-database").then((res) => {
      setMenuList(res.data)
    })
  },[])


  
  function sortAction(event) {
    let copyMenuList = [...MenuList]
    switch(event.target.value){
      case "L --> H":
        copyMenuList.sort((a,b) => {return a.price - b.price})
        break
      case "H --> L":
        copyMenuList.sort((a,b) => {return b.price - a.price})
        break
    }
    setMenuList(copyMenuList)
    console.log(MenuList)
  }

  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='sort'>
          <label for ='option'>Sort by:</label>
          <select onChange={sortAction}>
            <option value="none">Please select</option>
            <option value="L --> H">Price: Low to High</option>
            <option value="H --> L">Price: High to Low</option>
          </select>
        </div>
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