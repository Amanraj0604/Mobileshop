
import React from 'react';
import './Typeitem.css';

const TypeItem = ({ item }) => {
    return (
        <div className="category-item-container1">
            <img className="category-item-image" src={item.img} alt={item.title} />
            <div className="category-item-info">
                <h1 className="category-item-title">{item.title}</h1>
                <button className="category-item-button">SHOP NOW</button>
            </div>
        </div>
    );
};



export default TypeItem
