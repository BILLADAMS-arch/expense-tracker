import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) return;
    addExpense(formData);
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-input" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-input" />
      <select name="category" value={formData.category} onChange={handleChange} className="form-input">
        <option value="">Select Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills and Utilities">Bills and Utilities</option>
      </select>
      <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" type="number" className="form-input" />
      <input name="date" value={formData.date} onChange={handleChange} placeholder="Date" type="date" className="form-input" />
      <button type="submit" className="form-button">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
