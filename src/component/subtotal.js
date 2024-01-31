import React from 'react'
import "../subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateprovider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const history=useHistory();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=>(
            <>
              <p>
                  SubTotal({basket?.length} items):<strong>{value}</strong>
              </p>
              <small className='subtotal_gift'>
                  <input type="checkbox"/> This order 
                  contain a gift
              </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e =>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
