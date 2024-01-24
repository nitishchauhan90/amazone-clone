import React from 'react'
import "../checkout.css"
import checkout1 from "./img/checkout1.jpg"
import Subtotal from './subtotal'
import CheckoutProduct from './checkoutProduct'
import { useStateValue } from './stateprovider'
function Checkout() {
  const [{basket,user},dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src={checkout1} alt=''/>
            <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className='checkout_title'>Your shopping Basket</h2>
                {basket.map(item=>(
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
                
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
