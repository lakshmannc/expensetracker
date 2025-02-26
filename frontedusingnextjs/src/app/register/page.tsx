'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match.')
      return
    }
    try {
      const res = await axios.post('/api/auth/register', {
        name,
        email,
        password
      })
      router.push('/Login')
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <Link href="/">
            <button type="button" className="w-full bg-gray-300 text-black font-semibold py-2 rounded-lg mb-5">
              Back
            </button>
          </Link>

          <Link href="/dashboard"> <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg">
            Register
          </button>
          </Link>
          <p className="text-center mt-4">
            Already have an account? <Link href="/Login"><p className="text-blue-600 hover:underline">Login</p></Link>
          </p> 
        </form>
      </div>
    </div>
  )
}
