import React, { useState } from 'react';
import { useEffect } from 'react';
import Detail from '../Detail/Detail';
import Item from '../Item/Item';
import './Meal.css'

const Meal = () => {
    const [items, setItems] = useState([]);

    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, []);

    const handleDetail = (product) => {
        const foodItem = product;
        setDetail(foodItem);
    }

    return (
        <div className='meal-container'>
            <div className="item-container">
                {
                    items.map(item => <Item
                        key={item.idMeal}
                        item={item}
                        handleDetail={handleDetail}
                    ></Item>)
                }
            </div>
            <div className="detail-container">
                <Detail detail={detail}></Detail>
            </div>
        </div>
    );
};

export default Meal;