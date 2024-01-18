import React from 'react';
import "./Cart.css"; // Import your CSS file
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const Cart = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper1">
                    <h1 className="title">YOUR BAG</h1>
                    <div className="top">
                        <button className="top-button">CONTINUE SHOPPING</button>
                        <div className="top-texts">
                            <span className="top-text">Shopping Bag(2)</span>
                            <span className="top-text">Your Wishlist (0)</span>
                            <span className="top-text"></span>
                        </div>
                        <button className="top-button filled">CHECKOUT NOW</button>
                    </div>
                    <div className="bottom">
                        
                            <div className="product">
                                <div className="product-details">
                                    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/z/-original-imagmmmhjsjru7c2.jpeg?q=70" alt="Campus Shoes" className="image" />
                                    <div className="details">
                                        <span className="product-name"><b>Product: </b>Campus Shoes</span>
                                        <span className="product-id"><b>ID: </b>985426314232</span>
                                        <div className="product-color" ></div>
                                        <span className="product-size"><b>SIZE: </b>9</span>
                                    </div>
                                </div>
                                <div className="price-details">
                                    <div className="product-amount-container">
                                        <IoMdRemove className="icon" />
                                        <div className="product-amount">1</div>
                                        <IoMdAdd className="icon" />
                                    </div>
                                    <div className="product-price">Rs.500/-</div>
                                </div>
                            </div>
                            <hr className="hr" />
                            <div className="product">
                                <div className="product-details">
                                    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/z/-original-imagmmmhjsjru7c2.jpeg?q=70" alt="Campus Shoes" className="image" />
                                    <div className="details">
                                        <span className="product-name"><b>Product: </b>Campus Shoes</span>
                                        <span className="product-id"><b>ID: </b>985426314232</span>
                                        <div className="product-color" ></div>
                                        <span className="product-size"><b>SIZE: </b>9</span>
                                    </div>
                                </div>
                                <div className="price-details">
                                    <div className="product-amount-container">
                                        <IoMdRemove className="icon" />
                                        <div className="product-amount">1</div>
                                        <IoMdAdd className="icon" />
                                    </div>
                                    <div className="product-price">Rs.500/-</div>
                                </div>
                            </div>
                            <hr className="hr" />
                            {/* Repeat the similar structure for the second product */}
                        
                    </div>
                </div>
                <div className="summary">
                    <h1 className="summary-title">Order Summary</h1>
                    <div className="summary-item">
                        <span className="summary-item-text">SubTotal</span>
                        <span className="summary-item-price">Rs. 500/-</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-item-text">Shipping Charge</span>
                        <span className="summary-item-price">Rs. 50/-</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-item-text">Discount</span>
                        <span className="summary-item-price">Rs. -50/-</span>
                    </div>
                    <div className="summary-item total">
                        <span className="summary-item-text">Total</span>
                        <span className="summary-item-price">Rs. 500/-</span>
                    </div>
                    <button className="summary-button">ORDER NOW</button>
                </div>

            </div>
        </div>
    );
};

export default Cart;
