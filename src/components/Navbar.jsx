import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import web from '../images/web.svg'
import android from '../images/android.svg'
import python from '../images/python.svg'
import industrial from '../images/industrial.svg'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  bg-transparent p-0">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Appdid Training Logo" style={{maxHeight:'40px'}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{background:'none'}}>
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars" style={{color:'#fff'}}></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item p-2">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown p-2">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                        </Link>
                        <div className="dropdown-menu dropdownShadow" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item p-3" to="/fullstack-website-development/course">
                                <img src={web} alt="Web Development Logo" className="dropDownImage"/> 
                                <span className="ml-2"> Website Development</span>
                            </Link>
                            <Link className="dropdown-item p-3" to="/application-development/course">
                                <img src={android} alt="Android Training Logo" className="dropDownImage"/> 
                                <span className="ml-2"> Android Training</span>
                            </Link>
                            <Link className="dropdown-item p-3" to="/python-course/course">
                                <img src={python} alt="Python Training Logo" className="dropDownImage"/> 
                                <span className="ml-2">Python Training</span>
                            </Link>
                            <Link className="dropdown-item p-3" to="/industrial-training/course">
                                <img src={industrial} alt="Industrial Training Logo" className="dropDownImage"/> 
                                <span className="ml-2">Industrial Training</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item p-2">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>  
                </div>
        </nav>
    )
}

export default Navbar
