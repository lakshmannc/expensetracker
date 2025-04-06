import Link from "next/link";
import Footer from "./Navbar/Footer/Footer";

export default function Home() {
  return (
<div> 
    <div className="bg-gradient-to-r from-white to-white flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-500">Your Personalized Expense Tracker</h1>
      <p className="mb-8 text-xl text-gray-500">
        The easiest way to track your expenses.
      </p>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Link href="/register">
          <button className="bg-blue rounded-full px-6 py-2 text-lg font-bold text-grey transition duration-300 ease-in-out hover:bg-gray-500 hover:shadow-lg">
            Get Started
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-green-500 rounded-full px-6 py-2 text-lg font-bold text-grey transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg">
            Know Us
          </button>
        </Link>
      </div>
    </div>

    <div className="rounded-full bg-white shadow-lg p-2"> 
    <Footer/>
    </div>
    
    </div>
  );
}

