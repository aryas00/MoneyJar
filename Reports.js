import React from 'react';
import './Reports.css';
import Chart from './Chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Reports = ({ transactions }) => {
    const totalIncome = transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((total, transaction) => total + Number(transaction.amount), 0);

    const totalExpenses = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((total, transaction) => total + Number(transaction.amount), 0);

    const difference = totalIncome - totalExpenses;

    // Group expenses by category
    const expensesByCategory = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => {
            if (!acc[transaction.category]) {
                acc[transaction.category] = 0;
            }
            acc[transaction.category] += Number(transaction.amount);
            return acc;
        }, {});

    // Convert expenses by category to array for pie chart
    const pieChartData = Object.keys(expensesByCategory).map(category => ({
        name: category,
        value: expensesByCategory[category]
    }));

    // Filter and sort expenses
    const expenses = transactions.filter(transaction => transaction.type === 'expense').sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    return (
        <section id="reports">
            <h2>Reports</h2>
            <div>Total Income: ${totalIncome}</div>
            <div>Total Expenses: ${totalExpenses}</div>
            <div>Difference: ${difference}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <h3>Expenses by Category</h3>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name }) => name}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div style={{ width: '50%' }}>
                    <h3>List of Expenses</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense, index) => (
                                <tr key={index}>
                                    <td>{expense.date}</td>
                                    <td>${expense.amount}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Chart transactions={transactions} />
        </section>
    );
}

export default Reports;
