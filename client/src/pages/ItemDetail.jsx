import React, { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/ItemDetail.css'
import { CartContext } from '../context'


function ItemDetail() {
  const location = useLocation()
  const { name, image, price, description, ingredients } = location.state
  const [cartState, dispatch] = useContext(CartContext)
  
  const handleSubmit = () => {
    dispatch({
      type:"ADD_TO_CART",
      payload: {name, price: Number(price), quantity: 1}
    })
  }

  return (
    <div className='item-container'>
      <img className='left column item-image' src={process.env.PUBLIC_URL + image} alt='' />
      <div className='right column'>
        <h1 className='item-name'>{name}</h1>
        <p className='item-description'>{description}</p>
        <div className='item-ingredients'>
          <div>Ingredients</div>         
          {ingredients.map((eachItem) => {
            return <span>• {eachItem} </span>
          })
          }
        </div>
        <div className='item-price'>${price.toFixed(1)}</div>

        <div className='user-action'>
          { cartState.some((item) => item.name === name) ? 
          <button className='done'>This item has already been added to your cart ✓</button>
          :
          <button onClick={handleSubmit} >Add to Cart</button>
          }

          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail