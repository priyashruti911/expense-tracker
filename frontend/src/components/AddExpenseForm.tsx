import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_EXPENSE = gql`
  mutation AddExpense($title: String!, $amount: Float!) {
    addExpense(title: $title, amount: $amount) {
      id
      title
      amount
    }
  }
`;

const AddExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [addExpense] = useMutation(ADD_EXPENSE, {
    refetchQueries: ['GetExpenses'],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;
    try {
      await addExpense({   variables: {
        title,
        amount: parseFloat(amount),
      } });
      setTitle('');
      setAmount('');
    } catch (err) {
      console.error('Error adding expense:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
