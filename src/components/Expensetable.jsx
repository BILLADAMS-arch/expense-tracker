import React from 'react';

const ExpenseTable = ({ expenses, deleteExpense }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr className="table-header">
          <th className="data">Name</th>
          <th className="data">Description</th>
          <th className="data">Category</th>
          <th className="data">Amount</th>
          <th className="data">Date</th>
          <th className="data">Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} className="table-row">
            <td className="data">{expense.name}</td>
            <td className="data">{expense.description}</td>
            <td className="data">{expense.category}</td>
            <td className="data">{expense.amount}</td>
            <td className="data">{expense.date}</td>
            <td className="data">
              <button onClick={() => deleteExpense(index)} className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
