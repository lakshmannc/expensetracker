import Footer from "./components/Navbar/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { 
  FaWallet, 
  FaChartPie, 
  FaMoneyBillWave, 
  FaCalculator 
} from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Expense Tracker</h1>
            <p className="text-xl mb-6">
              Take control of your finances with intelligent tracking and insights
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { 
              icon: <FaWallet className="text-4xl text-blue-600" />, 
              title: "Budget Tracking", 
              description: "Monitor your spending across categories" 
            },
            { 
              icon: <FaChartPie className="text-4xl text-green-600" />, 
              title: "Expense Analysis", 
              description: "Visualize your financial patterns" 
            },
            { 
              icon: <FaMoneyBillWave className="text-4xl text-purple-600" />, 
              title: "Income Management", 
              description: "Track and categorize your income streams" 
            },
            { 
              icon: <FaCalculator className="text-4xl text-red-600" />, 
              title: "Financial Goals", 
              description: "Set and track your financial objectives" 
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Quick Stats */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Financial Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Income</h3>
              <p className="text-3xl font-bold text-blue-600">$5,420</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
              <p className="text-3xl font-bold text-green-600">$3,210</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Net Savings</h3>
              <p className="text-3xl font-bold text-purple-600">$2,210</p>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
