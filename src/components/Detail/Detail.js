import React from 'react';
import './Detail.css';

const Detail = ({ detail }) => {
    const { strMeal, strArea, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = detail;

    return (
        <div className='detail-cart'>
            <h2>See Detail</h2>
            <p className='detail-title'><big>{strMeal}</big></p>
            <div className='detail-info'>
                <p>Origin: {strArea}</p>
                <p>Catrgory: {strCategory}</p>
                <p>Igredient: {strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4} {strIngredient5}</p>
            </div>
        </div>
    );
};

export default Detail;