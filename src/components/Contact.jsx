import React from 'react'
import { useSnackbar } from "react-simple-snackbar";
import contactheader from '../images/contactheader.png'
import contactaddress from '../images/contactaddress.png'
import contactphonebook from '../images/contactphonebook.png'
import contactemail from '../images/contactemail.png'
import Navbar from './Navbar'
import Footer from './Footer'
import emailjs from 'emailjs-com';

const snackBarStyles = {
    position: "bottom-right",
    style: {
    background: "linear-gradient(to right,#fa897d 0%,#fe5f88 100%)",
      border: "2px solid #D93B8F",
      color: "white",
      fontFamily: "Menlo, monospace",
      fontSize: "18px",
      textAlign: "center"
    },
    closeStyle: {
      color: "#fff",
      fontSize: "16px"
    }
  };

  const sendEmail = (e)=> {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
      e.target.reset();
  }
function Contact() {
    const [openSnackbar] = useSnackbar(snackBarStyles);
    return (
        <div className="contact-page">
            <div className="contact-header">
            <Navbar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="contact-page-textBox">
                                <h1>Contact Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in?</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 contact-page-imgBox">
                        <img src={contactheader} alt="Contact Us"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row contact-details-section justify-content-center m-0">
                <div className="col-sm-12 col-md-5 contact-details-textBox">
                    <h1>Get in Touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste accusantium illo commodi sit rerum cumque ipsam quae enim esse.</p>
                    <div className="details-content d-flex">
                        <img src={contactaddress} alt="Address"/>
                        <p>101,1<sup>st</sup> Floor Earth Galaxy <br/> Near Thane Station (West) 400601</p>
                    </div>
                    <div className="details-content d-flex">
                        <img src={contactphonebook} alt="PhoneNumber"/>
                        <p>Call us on: <br/> <a style={{textDecoration:'none',color:'#6A7C92'}} href="tel:+918928394609">+91 8928394609</a> <br/>
                        <a style={{textDecoration:'none',color:'#6A7C92'}} href="tel:+919967856357">+91 9967856357</a></p>
                    </div>
                    <div className="details-content d-flex">
                        <img src={contactemail} alt="Email"/>
                        <p>Email us on: <br/><a href="mailto:info@appdid.com" style={{textDecoration:'none',color:'#6A7C92'}}>info@appdid.com</a></p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <form onSubmit={sendEmail}>
                        <div className="contact-us-form">
                            <h1>Drop us a line</h1>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-labelledby="name" name="name" id="name" aria-describedby="name"placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" aria-labelledby="email"  id="email" aria-describedby="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" name="number" aria-labelledby="number"  id="number" aria-describedby="number" placeholder="Number"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" name="message" aria-labelledby="message"  placeholder="Your Message" rows="3"></textarea>
                            </div>
                            <button onClick={() => openSnackbar("We will get in touch with you shortly")}>Send a Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="google-maps">

                <iframe width="100%" height="350" frameBorder="0" style={{border:0}} title="Appdid on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3768.176977382834!2d72.97471931490283!3d19.187470987024057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sappdid!5e0!3m2!1sen!2sin!4v1547826422392"
                    allowFullScreen>
                </iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
