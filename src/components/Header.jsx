import React from 'react'
import Navbar from './Navbar'
function Header() {
    return (
        <div className="header-section">
            <Navbar />
            <div className="row justify-content-center container">
                <div className="col-sm-12 col-md-6 header-section-textarea ">
                    <div className="textBox">
                        <h1 className="header-section-maintext">Jumpstart Your Career as a Developer</h1>
                        <p className="header-section-subtext">Learn from Industry Experts on In-demand skills needed in the Industry and reach your goals and pursue your dreams.</p>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <img src="https://codingphase.com/wp-content/uploads/elementor/thumbs/ryse-image-new-smaller-ohqf95qgiwj73o87x80gv0ei8rbirlzk02ob50azfa.png" className="header-section-img" alt="Boost your career"/>
                </div>
            </div>
        </div>
    )
}

export default Header
