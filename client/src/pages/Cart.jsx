import { useContext } from 'react'
import { CartContext } from '../context'
import '../styles/Cart.css'

function Cart() {
  const [cartState, dispatch] = useContext(CartContext)
  let cartValue = 0
  
  return (
    <div className='Cart'>
      <p className='heading'>This is your current cart</p>
      <table>
        <tr>
          <th style={{width: '10%'}}>Item No.</th>
          <th style={{width: '30%'}}>Item Name</th>
          <th style={{width: '10%'}}>Unit Price</th>
          <th style={{width: '10%'}}>Quantity</th>
          <th style={{width: '10%'}}>Item Value</th>
        </tr>

        {cartState.map((item, index) => {
          const itemValue = item.price * item.quantity
          cartValue += itemValue
          return (
            <tr>
              <td>{index+1}</td>
              <td className='cart-item-name'>{item.name}</td>
              <td className='cart-item-price'>{item.price}</td>
              <td>
                <div className='cart-item-quantity'>
                  <button onClick={() => { 
                    dispatch({
                      type:"CHANGE_QTY",
                      payload: {name: item.name, price: item.price, quantity: item.quantity-1}
                    })}}
                  > - </button>
                  
                  <div>{item.quantity}</div>
                  
                  <button onClick={() => { 
                    dispatch({
                      type:"CHANGE_QTY",
                      payload: {name: item.name, price: item.price, quantity: item.quantity+1}
                    })}}
                  > + </button>
                </div>
              </td>
              <td className='cart-item-total-cost'>{itemValue.toFixed(1)}</td>
            </tr>
          )    
        })}

        <tr className='cart-summary'>
          <td colspan='4' style={{textAlign: 'right', paddingRight: '20px'}}>Total: </td>
          <td>{cartValue.toFixed(1)}</td>
        </tr>

      </table>

    </div>
  )
}

export default Cart