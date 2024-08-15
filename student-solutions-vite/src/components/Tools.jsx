import React from 'react';

const Tools = () => {
    const categories = ['Entertainment', 'Music', 'Food'];

    return (
        <div>
            <h2>Categories of Tools</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tools;