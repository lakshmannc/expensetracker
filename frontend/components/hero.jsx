"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const hero = () => {
  return (

    <div className="pb-20 px-4">
    <div className="container mx-auto text-center">
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Track your expenses <br/> with Us...
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'> Manage your expenses with ease and track your expenses in one place.</p>
    
    <div className='flex justify-center space-x-4'> 
   <Link href = "/">
   <Button size = "lg" className="px-8" variant="default"> get started </Button>
   </Link> 

   <Link href = "">
   <Button size = "lg" className="px-8" variant="outline"> Know Us! </Button>
   </Link>  
   </div>
   
    </div>   
    </div>
  
 )
}

export default hero