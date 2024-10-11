import React from 'react'
import './Navbar.css'
import{ Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src = "" alt = ""/>
                <p>EXPENSE TRACKER</p>
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