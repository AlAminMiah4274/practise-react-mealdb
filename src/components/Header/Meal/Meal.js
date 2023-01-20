import React, { useState } from 'react';
import { useEffect } from 'react';
import './Meal.css'

const Meal = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, []);

    return (
        <div className='meal-container'>
            <div className="item-container">
                <h2>Items: {items.length}</h2>
            </div>
            <div className="details-container">
                <h2>Details</h2>
            </div>
        </div>
    );
};

export default Meal;