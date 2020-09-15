import React from 'react'
import {Link} from 'react-router-dom'
function HomeContact() {
    return (
        <div className="home-contact">
            <h1>So what are you waiting for ?</h1>
            <Link to="/contact">Connect With Us Now</Link>
        </div>
    )
}

export default HomeContact
