import React from 'react';
import './Item.css';

const Items = ({ item, handleDetail }) => {

    const { strMealThumb, strMeal, strInstructions } = item;
    return (
        <div className='item-info'>
            <img src={strMealThumb} alt="" />
            <div className='item-text'>
                <p><big>{strMeal}</big></p>
                <p>{strInstructions.slice(0, 130)}</p>
            </div>
            <button className='btn-detail'>
                <p onClick={() => handleDetail(item)}>Detail</p>
            </button>
        </div>
    );
};

export default Items;