import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem({ name, image, price, description, ingredients}) {
  return (
    <div className='menuItem'>
      <Link to={`/menu/${name}`} state={{ name, image, price, description, ingredients}}>
        <img src={image} />
        <h1>{name}</h1>
        <p>${price}</p>
      </Link>
    </div>
  )
}

export default MenuItem