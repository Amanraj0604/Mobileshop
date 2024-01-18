import React from 'react';
import './Product.css'; // Import the CSS file for styling

import Navbar from '../../Component/Navbar/Navbar';

import Footer from '../../Component/Footer/Footer';
import Productlist from '../../Component/ProductList/Productlist';

const Product = () => {
    return (
        <div className="container">
            <Navbar />
            <h1 className="title">Product</h1>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-text">Filter Products:</span>
                    <select className="select">
                        <option disabled selected>
                            Brands
                        </option>
                        <option>Redmi</option>
                        <option>Samsung</option>
                        <option>Motorola</option>
                        <option>Oppo</option>
                        <option>VIVO</option>
                        <option>Realmi</option>
                    </select>
                    <select className="select">
                        <option disabled selected>
                            Type
                        </option>
                        <option>Smartphone</option>
                        <option>Headphone</option>
                        <option>Earbuds</option>
                        <option>SmartWatch</option>
                        <option>Blututh </option>
                       
                    </select>
                </div>
                <div className="filter">
                    <span className="filter-text">Sort Products:</span>
                    <select className="select">
                        <option selected>
                            Newest
                        </option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>Relevance</option>
                    </select>
                </div>
            </div>
            <Productlist/>
            <Footer />
        </div>
    );
}

export default Product;

