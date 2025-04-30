import { gql, useQuery } from '@apollo/client';

const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      id
      title
      amount
    }
  }
`;

const ExpenseList = () => {
  const { loading, error, data } = useQuery(GET_EXPENSES);

  if (loading) return <p>Loading expenses...</p>;
  if (error) return <p>Error loading expenses</p>;

  return (
    <ul>
      {data.expenses.map((expense: any) => (
        <li key={expense.id}>
          {expense.title} - ₹{expense.amount}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
