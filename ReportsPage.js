import React from 'react';
import Reports from './Reports';
import './ReportsPage.css';

const ReportsPage = ({ transactions }) => {
    return (
        <div className="reports-page">
            <h2></h2>
            <Reports transactions={transactions} />
            <h1 align='centre'>Keep tracks and Keep Saving!</h1>
        </div>
    );
}

export default ReportsPage;
