import React from 'react'
import './Navbar.css'
import{ Link } from 'react-router-dom'
import logo from '../assests/bank.jpg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src = {logo} alt = ""/>
            </div>
            
            <ul className="nav-menu">
                <li>BUDGET ASSISTANT</li>
            </ul>
            <div className='nav-login'>
            <Link to = '/login'><button>Login</button></Link>
                
           </div>
        </div>
    )
}

export default Navbar