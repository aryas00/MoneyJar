import React, { useState, useEffect } from 'react';
import './IncomeForm.css';
const IncomeForm = ({ addTransaction }) => {
    const [income, setIncome] = useState({
        date: '',
        amount: '',
        source: ''
    });

    useEffect(() => {
        // Load balance from local storage
        const savedBalance = localStorage.getItem('balance');
        if (savedBalance) {
            setIncome(prevIncome => ({ ...prevIncome, amount: savedBalance }));
        }
    }, []);

    const handleChange = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBalance = Number(income.amount) + Number(localStorage.getItem('balance') || 0);
        localStorage.setItem('balance', newBalance);
        addTransaction({ ...income, type: 'income' });
        setIncome({ ...income, amount: '' }); // Clear only amount field
    };

    return (
        <section id="income">
            <h2>Log Income</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" value={income.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" name="amount" value={income.amount} onChange={handleChange} required />
                </div>
                <div>
                    <label>Source:</label>
                    <input type="text" name="source" value={income.source} onChange={handleChange} required />
                </div>
                <button type="submit">Add Income</button>
            </form>
        </section>
    );
}

export default IncomeForm;
