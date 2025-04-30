import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EXPENSE, GET_EXPENSES } from './graphql/queries';

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const { data, loading, error, refetch } = useQuery(GET_EXPENSES);
  const [addExpense] = useMutation(ADD_EXPENSE, {
    onCompleted: () => {
      setTitle('');
      setAmount('');
      setDate('');
      refetch();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExpense({
      variables: {
        createExpenseInput: {
          title,
          amount: parseFloat(amount),
          date,
        },
      },
    });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>

      <h2>Expenses</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching expenses</p>}
      <ul>
        {data?.getAllExpenses.map((expense: any) => (
          <li key={expense.id}>
            <strong>{expense.title}</strong> - ₹{expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
