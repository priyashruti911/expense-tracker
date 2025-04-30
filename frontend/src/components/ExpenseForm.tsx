import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_EXPENSE = gql`
  mutation AddExpense($description: String!, $amount: Float!, $date: String!) {
    addExpense(description: $description, amount: $amount, date: $date) {
      id
      description
      amount
      date
    }
  }
`;

const AddExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [addExpense] = useMutation(ADD_EXPENSE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount && date) {
      try {
        await addExpense({
          variables: { description, amount, date },
        });
        setDescription('');
        setAmount(0);
        setDate('');
      } catch (error) {
        console.error('Error adding expense:', error);
      }
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
