import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdTrendingDown } from "react-icons/io";
import "./Singleproduct.css"
const Singleproduct = () => {
    return (
        <>
            <Navbar />
            <div className="singleproduct">
                <div className="imageclass">
                    <img className='imgpr' src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70&crop=false" alt="" />
                    <div className="single-button">
                        <button><FaCartArrowDown /> BUY NOW</button>
                        <button> <IoMdTrendingDown />ADD TO CART</button>
                    </div>
                </div>
                <div className="productDetails">
                    <span>realme 11x 5G (Purple Dawn, 128 GB)  (8 GB RAM)</span>
                    <h2>Rs. 15999/- <span><del>18999/-</del></span></h2>
                    <p>+ ₹49 Secured Packing Fee</p>
                    <div className="detailsp">
                        <div class="color-option">
                            <label for="black">Color:</label>
                            <select id="black" class="color-select" style ={{background:" gray"}}></select>
                            <select id="lightblue" class="color-select" style={{background: "lightblue"}}></select>
                        </div>
                    </div>
                    <div className="highlights">
                        <ul><span>Highlights</span>
                            <li>8 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                            <li>17.07 cm (6.72 inch) Full HD+ Display</li>
                            <li>64MP + 2MP | 8MP Front Camera</li>
                            <li>5000 mAh Battery</li>
                            <li>Dimensity 6100+ Processor</li>
                        </ul>
                    </div>
                    <div className="Specifications">
                        <h3>Specifications</h3>
                        <div className="genral">
                            <ul> <span className=''>Genral</span>
                                <li><span>In the Box </span>Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, TPU Case</li>
                                <li><span>Model Number </span>RMX3785</li>
                                <li><span>Model Name </span>11x 5G</li>
                                <li><span>Browse Type </span>SmartPhones</li>
                                <li><span>SIM Type </span>Dual Sim</li>
                            </ul>
                        
                        <ul> <span>Display Features</span>
                            <li><span>In the Box </span>Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, TPU Case</li>
                            <li><span>Model Number </span>RMX3785</li>
                            <li><span>Model Name </span>11x 5G</li>
                            <li><span>Browse Type </span>SmartPhones</li>
                            <li><span>SIM Type</span>Dual Sim</li>
                        </ul>
                        <ul> <span>Os & Processor Features</span>
                            <li><span>In the Box </span>Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, Sim Card Tool, Screen Protect Film, TPU Case</li>
                            <li><span>Model Number </span>RMX3785</li>
                            <li><span>Model Name </span>11x 5G</li>
                            <li><span>Browse Type </span>SmartPhones</li>
                            <li><span>SIM Type </span>Dual Sim</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default Singleproduct
