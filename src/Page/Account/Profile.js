import React from 'react'
import { TiEdit } from "react-icons/ti";
import "./Profile.css"
const Profile = () => {
    return (
        <div className='Profile-container'>
            <h1 style={{textAlign:"center"}}>Profile</h1>
            <div className="profile">
                <div className="pruser">
                    <h1>P</h1>
                </div>
                <hr />
                <div className="prdetails">
                    <h3>Pooja Kumari</h3>
                    <span>pooja@gmail.com</span>
                    <TiEdit className="edit-add"/>

                </div>
            </div>
            {/* <hr /> */}
            <div className="about-user">
                <div className="grid-item">
                    <div className="userbut">
                        <button className="butt-pro">Order Details</button>
                        <button className='butt-pro'>Delete Account</button>
                        <button className='butt-pro'>LOGOUT</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="add-con">
                        <h3>Delivary Address</h3>
                        <h4>Atish kumar</h4>
                        <p ><span>Madhukunj nagar</span>
                            <span>Bangali Caloni</span>
                            <span>845438</span>
                            <span>bettiah</span>
                            <span>Bihar</span>
                        </p>
                    </div>
                    <div className="edit-add">
                        <TiEdit />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Profile
