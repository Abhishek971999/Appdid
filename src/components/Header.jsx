import React from 'react'
import Navbar from './Navbar'
import headerMainImg from '../images/headerMainImg.png'
import emailjs from 'emailjs-com';

const sendEmail = (e)=> {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        document.getElementById("closeModal").click();
    }, (error) => {
        console.log(error.text);
    });
      e.target.reset();
    
  }
function Header() {
    return (
        <div className="header-section">
            <Navbar />
            <div className="row justify-content-center container">
                <div className="col-sm-12 col-md-6 header-section-textarea ">
                    <div className="textBox">
                        <h1 className="header-section-maintext">Jumpstart Your Career as a Developer</h1>
                        <p className="header-section-subtext">Learn from Industry Experts on In-demand skills needed in the Industry and reach your goals and pursue your dreams.</p>
                        <button data-toggle="modal" data-target="#EnrollNow" className="header-link">Get in Touch</button>
                    </div>
                    <div className="modal fade" id="EnrollNow" tabIndex="-1" role="dialog" aria-labelledby="EnrollNowLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document" style={{padding:0}}>
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="EnrollNowLabel">Connect with us </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModal">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" style={{padding:0}}>
                                    <form onSubmit={sendEmail}>
                                     <div className="contact-us-form">
                                        <div className="form-group">
                                            <input type="text" name="name" aria-labelledby="name" className="form-control" id="name" aria-describedby="name"placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" aria-labelledby="email" className="form-control" id="email" aria-describedby="email" placeholder="Email"/>
                                        </div>
                                       <div className="form-group">
                                            <input type="number" name="number" aria-labelledby="number" className="form-control" id="number" aria-describedby="number" placeholder="Phone number"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="year" aria-labelledby="year" className="form-control" id="year" aria-describedby="year" placeholder="Year (Eg : Computer Engg 2nd year)"/>
                                           
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="location" aria-labelledby="location" className="form-control" id="location" aria-describedby="location" placeholder="Location (Eg : Mumbai)"/>
                                        </div>
                                        <div className="form-check form-check-inline mr-2">
                                            <input className="form-check-input" aria-labelledby="course" name="course" type="checkbox" id="fullstack" value="Fullstack Training"/>
                                            <label className="form-check-label" htmlFor="fullstack">FullStack Development</label>
                                        </div>
                                        <div className="form-check form-check-inline mr-2">
                                            <input className="form-check-input" aria-labelledby="course" name="course" type="checkbox" id="fullstack" value="React and Firebase Development"/>
                                            <label className="form-check-label" htmlFor="fullstack">React and Firebase Development</label>
                                        </div>
                                        <br/>
                                        <div className="form-check form-check-inline mr-2">
                                            <input className="form-check-input" aria-labelledby="course" name="course" type="checkbox" id="android" value="Android Training"/>
                                            <label className="form-check-label" htmlFor="android">Application Development</label>
                                        </div>
                                        <div className="form-check form-check-inline mr-2">
                                            <input className="form-check-input" aria-labelledby="course" name="course" type="checkbox" id="python" value="Python Training"/>
                                            <label className="form-check-label" htmlFor="python">Python Training</label>
                                        </div><br/>
                                        <button type="submit" >Send a Message</button>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <img src={headerMainImg} alt="Jumpstart Your Career as a Developer" className="header-section-img"/>
                </div>
            </div>
        </div>
    )
}

export default Header
