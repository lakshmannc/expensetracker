import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './CSS/Main.css'

const main = () => {
  return (
    <div className='main'>
        <Navbar/>
        <div className="main-pod">
        <h2> Welcome To Your Personalised Assistant!!! </h2> 
        <p> With AI Powered Technology </p>
        </div>

       
    </div>
  )
}

export default main