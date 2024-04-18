import React, { useState } from 'react';
import './Categories.css';
const Categories = ({ categories, setCategories }) => {
    const [newCategory, setNewCategory] = useState('');

    const addCategory = () => {
        if (newCategory.trim() === '') return;
        setCategories([...categories, newCategory]);
        setNewCategory('');
    };

    const removeCategory = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    return (
        <section id="categories">
            <h2>Manage Categories</h2>
            <div>
                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                <button onClick={addCategory}>Add Category</button>
            </div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        {category}
                        <button onClick={() => removeCategory(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Categories;
