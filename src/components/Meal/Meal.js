import React, { useState } from 'react';
import { useEffect } from 'react';
import Item from '../Item/Item';
import './Meal.css'

const Meal = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, []);

    return (
        <div className='meal-container'>
            <div className="item-container">
                {
                    items.map(item => <Item
                        key={item.idMeal}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="detail-container">
                <h2>Details</h2>
            </div>
        </div>
    );
};

export default Meal;