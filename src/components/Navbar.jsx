import React from 'react'
import logo from '../images/logo.png'
import web from '../images/web.svg'
import android from '../images/android.svg'
import python from '../images/python.svg'
import industrial from '../images/industrial.svg'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg  bg-transparent p-0">
                <div className="container">
                    <a class="navbar-brand" href="#">
                    <img src={logo} alt="Appdid Training Logo" style={{maxHeight:'40px'}}/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{background:'none'}}>
                    <span class="navbar-toggler-icon">
                        <i class="fas fa-bars" style={{color:'#fff'}}></i>
                    </span>
                </button>
                <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item p-2">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item dropdown p-2">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                        </a>
                        <div class="dropdown-menu dropdownShadow" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item p-3" href="">
                                <img src={web} alt="Web Development Logo" className="dropDownImage"/> 
                                <span className="ml-2"> Website Development</span>
                            </a>
                            <a className="dropdown-item p-3" href="">
                                <img src={android} alt="Android Training Logo" className="dropDownImage"/> 
                                <span className="ml-2"> Android Training</span>
                            </a>
                            <a className="dropdown-item p-3" href="">
                                <img src={python} alt="Python Training Logo" className="dropDownImage"/> 
                                <span className="ml-2">Python Training</span>
                            </a>
                            <a className="dropdown-item p-3" href="">
                                <img src={industrial} alt="Industrial Training Logo" className="dropDownImage"/> 
                                <span className="ml-2">Industrial Training</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item p-2">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    </ul>
                </div>  
                </div>
        </nav>
    )
}

export default Navbar
