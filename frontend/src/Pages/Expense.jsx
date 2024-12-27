import React, { useState, useEffect } from 'react'
import './CSS/Expense.css'
import Navbar from '../Components/Navbar/Navbar'

const Expense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch('/api/expenses');
    const data = await response.json();
    setExpenses(data);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (description && amount) {
      const newExpense = { description, amount };
      await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      });
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className='expense-main'>
      <Navbar />
      <div class="expense">
        <div className="expense-form">
        <h1>Expense Tracker</h1>
        <p>Track your expenses with ease!</p>
           <form id="expense-form" onSubmit={handleFormSubmit}>
            <input type="text" id="description" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="number" id="amount" placeholder="Amount" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button type="submit">Add Expense</button>
        </form>
        </div>
        <div className="expense-table">

        <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Expense;