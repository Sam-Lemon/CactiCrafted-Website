import React from "react";
import LogoImg from './LogoImg';


export default function FooterMain () {

    return(
        <>
        <div>
            <div className="footer-main">
                <div>
                    <h4 className="footer-main-header">Shop Plants</h4>
                    <ul className="footer-list">
                        <li>All Succulents</li>
                        <li>Explore by Genre</li>
                        <li>Exclusive Products</li>
                        <li>New Products</li>
                    </ul>
                </div>
                <div>
                    <h4 className="footer-main-header">Shop Supplies</h4>
                    <ul className="footer-list"> 
                        <li>Soil</li>
                        <li>Food and Fertilizer</li>
                        <li>Pots and Containers</li>

                    </ul>
                </div>
                <div>
                    <h4 className="footer-main-header">Info</h4>
                    <ul className="footer-list">
                        <li>About Us</li>
                        <li>Events/Calendar</li>
                        <li>Shipping/Ordering</li>
                        <li>Succulent Care</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div>
                <LogoImg />
            </div>
        </div>
        </>
    );

}


