
import React from "react";
import "./cetegory.css"; 
import { popularProducts } from "../../Data";
import Categories from "./Categories";

const Cetegory = () => {
    return (
        <div className="containerr">
            {popularProducts.map((item) => (
                <Categories item={item} key={item.id} />
            ))}
            
        </div>
    );
};

export default Cetegory
