import React from 'react'
import "../product.css"
import { useStateValue } from './stateprovider'
function Product({ id,title,price,image,rating}) {
    const [{basket},dispatch] = useStateValue();

    const addToBasket=() =>{
        //dispatch the item info the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>
                    {price}
                </strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((__,i)=>(
                    <p>⭐️</p>
                ))}
            </div>
        </div>
        <img src={image} alt=''/>
        <button className='product_add_button' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
