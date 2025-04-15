import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr className="table-header">
          <th className="table-data">Name</th>
          <th className="table-data">Description</th>
          <th className="table-data">Category</th>
          <th className="table-data">Amount</th>
          <th className="table-data">Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} className="table-row">
            <td className="table-data">{expense.name}</td>
            <td className="table-data">{expense.description}</td>
            <td className="table-data">{expense.category}</td>
            <td className="table-data">{expense.amount}</td>
            <td className="table-data">{expense.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
