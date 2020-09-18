import React from 'react'
import logo from '../images/logo.png'
var dateObj = new Date();
var year = dateObj.getFullYear();
function Footer() {
    return (
        <footer className="footerSection">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md">
                        <img src={logo} alt="Appdid Training Logo" style={{height:'80px'}}/>
                        <p className="footer-text">&#169;{year} Appdid</p>
                    </div>
                    <div className="col-sm-12 col-md">
                        <h5 className="footerMainText">About</h5>
                        <ul className="list-unstyled text-small">
                            <p className="footer-text">We develop innovative & creative products and services that provide total communication and information solutions.</p>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md">
                        <h5 className="footerMainText">Contact Us</h5>
                        <ul className="list-unstyled text-small">
                            <li className="py-1">
                                <a className="footerLinks" href="tel:+919967856357" >
                                <i className="fas fa-phone"></i>&nbsp;&nbsp;<span >+91 9967856357</span></a>
                            </li>
                            <li className="py-1">
                                <a className="footerLinks" href="tel:+918928394609">
                                <i className="fas fa-phone"></i>&nbsp;&nbsp;<span >+91 8928394609</span></a>
                            </li>
                            <li className="py-1"> 
                                <p className="mb-0 footerLinks">
                                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;<span >101,3rd Floor Earth Galaxy Near Thane Station (West) 400601</span>
                                </p>
                            </li>
                            <li className="py-1">
                                <a className="footerLinks" href="mailto:info@appdid.com">
                                <i className="fas fa-envelope"></i>&nbsp;&nbsp;<span >info@appdid.com</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md">
                        <h5 className="footerMainText">Follow</h5>
                        <div className="footer-social-info">
                            <a target="_blank" aria-label="Facebook" rel="noopener noreferrer" href="https://www.facebook.com/appdid/?modal=admin_todo_tour" className="iconBox facebook" ><i className="fab fa-facebook-f"></i></a>
                            <a target="_blank" aria-label="Instagram" rel="noopener noreferrer" href="https://www.instagram.com/appdid_/" className="iconBox instagram"><i className="fab fa-instagram"></i></a>
                            <a target="_blank" aria-label="Linkedin" rel="noopener noreferrer" href="https://www.linkedin.com/company/14521934" className="iconBox linkedin" ><i className="fab fa-linkedin-in"></i></a>
                            <a target="_blank" aria-label="Twitter" rel="noopener noreferrer" href="https://twitter.com/AppdidStudio/" className="iconBox twitter"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
            
                </div>
            </div>
        </footer>
    )
}

export default Footer
