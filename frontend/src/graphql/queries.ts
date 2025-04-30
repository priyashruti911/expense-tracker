import { gql } from '@apollo/client';

export const ADD_EXPENSE = gql`
  mutation AddExpense($createExpenseInput: CreateExpenseInput!) {
    addExpense(createExpenseInput: $createExpenseInput) {
      id
      title
      amount
      date
    }
  }
`;

export const GET_EXPENSES = gql`
  query {
    getAllExpenses {
      id
      title
      amount
      date
    }
  }
`;
