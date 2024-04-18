import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">Money Jar</h1>
            <h2 className="subtitle">by Arya Nandavadekar</h2>
            <nav className="nav">
                {/* Anchor tag with relative URL */}
                <a href="home.html">Home</a>
                <a href="#income">Income</a>
                <a href="#expenses">Expenses</a>
                <a href="#categories">Categories</a>
                <a href="#reports">Reports</a>
            </nav>
        </header>
    );
}

export default Header;
