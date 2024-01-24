import React from 'react'
import "../header.css"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './stateprovider';
import { auth } from './firebase';
function Header() {
    const[{basket,user},dispatch]=useStateValue();
    const handleAuthnetication =()=>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt=''/>
        </Link>
        <div className='header_address'>
            <PlaceOutlinedIcon/>
            <div className='address'>
                <p><span>Delivering to Delhi 110001</span></p>
                <p className='header_address_p2'>Update location</p>
            </div>
        </div>
        <div className='header_search'>
            <div className='header_searchData'>
                <p>All</p>
                <ArrowDropDownOutlinedIcon/>
            </div>
            
            <input className='header_searchInput' placeholder='Search Amazon.in ' type='text'/>
            <span><SearchOutlinedIcon className='header_searchIcon'/></span>
        </div>
        <div className='header_nav'>
            <div className='header_option'>
                
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthnetication} className='header_optionFirst'>
                        <div>
                            <p><span>Hello,{user ? 'Sign Out' : 'Sign In'}</span></p>
                            <p className='header_option_p2'>Account & Lists</p>
                        </div>
                        <ArrowDropDownOutlinedIcon/>
                    </div>
                    
                </Link>
                
            </div>
            <Link to=''>
                <div className='header_option'>
                    <p><span>Returns</span></p>
                    <p className='header_option_p2'>& Orders</p>
                </div>
            </Link>
            
            <Link to='/checkout'>
                <div className='header_option'>
                    <p className='header_option_p2'><ShoppingCartOutlinedIcon/>{basket?.length} Cart</p>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header
