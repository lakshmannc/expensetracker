'use client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">About us</h2>
        <p className="text-lg">
          We Provide the Best Solution for your Expenses With Personalized AI Assistant.
          <br />
          This Platform capable of handling your Finance and Provides best support for your plans.<br/> This Can be used by Individual and Business purposes . 
        </p>
        <div className="flex flex-row items-center justify-center mt-10">
        <Link href="/register">   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page