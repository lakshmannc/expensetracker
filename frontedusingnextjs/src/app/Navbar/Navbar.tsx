import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Expense Tracker
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link href="/expense" className="text-white hover:text-blue-300">
            Expense
          </Link>
          <Link href="/income" className="text-white hover:text-blue-300">
            Income
          </Link>
        
        </div>
      </div>
    </nav>
  );
}

