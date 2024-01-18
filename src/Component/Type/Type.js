
import React from 'react';
import { categories } from '../../Data';
import './Type.css'; 
import TypeItem from './TypeItem';


const Type = () => {
    return (
        <div className="categories-container">
            {categories.map((item) => (
                <TypeItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Type
