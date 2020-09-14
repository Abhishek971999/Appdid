import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import headerMainImg from '../images/headerMainImg.png'
function Header() {
    return (
        <div className="header-section">
            <Navbar />
            <div className="row justify-content-center container">
                <div className="col-sm-12 col-md-6 header-section-textarea ">
                    <div className="textBox">
                        <h1 className="header-section-maintext">Jumpstart Your Career as a Developer</h1>
                        <p className="header-section-subtext">Learn from Industry Experts on In-demand skills needed in the Industry and reach your goals and pursue your dreams.</p>
                        <Link to="/contact" className="header-link">Get in Touch</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <img src={headerMainImg} alt="Jumpstart Your Career as a Developer"/>
                </div>
            </div>
        </div>
    )
}

export default Header
