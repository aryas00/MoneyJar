import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = ({ addTransaction, categories }) => {
    const [expense, setExpense] = useState({
        date: '',
        amount: '',
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ ...expense, type: 'expense' });
        setExpense({ date: '', amount: '', category: '', description: '' }); // Clear form fields
    };

    return (
        <section id="expenses">
            <h2>Log Expense</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" value={expense.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />
                </div>
                <div>
                    <label>Category:</label>
                    <select name="category" value={expense.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={expense.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </section>
    );
}

export default ExpenseForm;
