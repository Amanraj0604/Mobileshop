import React from 'react';
import './Navbar.css'; 
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="container0">
            <div className="wrapper">
                <div className="left">
                    <span className="language">EN</span>
                    <div className="search-container">
                        <input className="input" type="text" />
                        <IoMdSearch style={{ color: 'gray', fontSize: 16 }} />
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">Besti's Park</h1>
                </div>
                <div className="right">
                    <div className="menu-item">REGISTER</div>
                    <div className="menu-item">SIGN IN</div>
                    <div className="menu-item">
                        <div className="badge">
                            <FaShoppingCart size={20} color="black" />
                            <span className="badge-content" style={{color:"red"}}>4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
