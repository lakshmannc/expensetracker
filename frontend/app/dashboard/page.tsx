import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Navbar/Footer/Footer'


const page = () => {
  return (
    <div className='block flex-col items-center h-screen w-screen'>
    <Navbar/>
    <div> 
    <h2 className='text-6xl font-bold self-center text-center mt-4'>Welcome To User Dashboard !!!</h2>
    <p className='text-center mt-2'>Here we can see all the details</p>
    </div>
    <div className='mt-40 mb-9'>  
    <Footer/>
    </div> 
    </div>
  )
}

export default page