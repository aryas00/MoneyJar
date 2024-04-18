import React, { useState } from 'react';
import Header from './Header';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import Categories from './Categories';
import ReportsPage from './ReportsPage';
import './App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <div className="transactions-container">
                    <div className="expenses">
                        <h2>Expenses</h2>
                        <IncomeForm addTransaction={addTransaction} />
                        <ExpenseForm addTransaction={addTransaction} categories={categories} />
                        <Categories categories={categories} setCategories={setCategories} />
                    </div>
                </div>
            </main>
            <ReportsPage transactions={transactions} /> {/* Render ReportsPage component here */}
        </div>
    );
}

export default App;
