import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "../Menu.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Menu() {
  return (
    <div className='menu'>
        <div className='menu_sidebar'>
            <MenuIcon/>
            <p>All</p>
        </div>
        <p>Fresh</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Today's Deals</p>
        <p>Mobiles</p>
        <p>Electronics</p>
        <p>Customer Service</p>
        <div className='menu_down'>
        <p>Prime</p>
        <ArrowDropDownIcon/>
        </div>
        
        <p>Gift Ideas</p>
    </div>
  )
}

export default Menu
