'use client'
import { useState } from "react";
import Link from "next/link";

export default function ManageExpenses() {
  
  const [expenses, setExpenses] = useState([]);

 

  const fetchExpenses = async () => {
    const response = await fetch("/api/expenses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    const data = await response.json();
    setExpenses(data);
  };

  const deleteExpense = async (id) => {
    const response = await fetch(`/api/expenses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    if (response.ok) {
      fetchExpenses();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Manage Expenses</h1>
      <Link href="/expenses/new">
        <p className="mt-4 text-2xl font-bold text-blue-500 hover:text-blue-700">
          Add new expense
        </p>
      </Link>
      <ul className="mt-4 space-y-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex items-center justify-between">
            <span className="text-lg">{expense.name}</span>
            <span className="text-lg">{expense.amount} {expense.currency}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
