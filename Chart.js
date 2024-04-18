import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css';

const Chart = ({ transactions }) => {
    const data = transactions.map(transaction => ({
        name: transaction.date,
        income: transaction.type === 'income' ? transaction.amount : 0,
        expenses: transaction.type === 'expense' ? transaction.amount : 0
    }));

    return (
        <div className="chart-container">
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#8884d8" />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}

export default Chart;

