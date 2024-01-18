import React from "react";
import "./Categories.css";
import { AiOutlineSearch } from 'react-icons/ai';

const Categories = ({ item }) => {
    return (
        <div className="product-containerr">
            <div className="circle">
            <h1>{item.brand}</h1>
                <img className="imagee" src={item.img} alt={item.name} />
                <div className="info">
                    <div className="icon">
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
