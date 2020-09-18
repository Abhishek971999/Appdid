import React from 'react'
import certificate from '../images/certificate.png'
import instructor from '../images/instructor.png'
import independent from '../images/independent.png'
import intern from '../images/intern.png'
import jobinterview from '../images/jobinterview.png'
import industry from '../images/industry.png'
function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="features-textbox text-center">
                    <p>WHY CHOOSE US</p>
                    <h1>Our Exclusive Features</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                        <img src={industry} className="feature-card-img" alt="" style={{maxWidth: "60px",marginRight: "5px"}}/>
                        <div className="feature-card-textbox">
                            <h1>Industry Project Experience</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum corporis delectus repudiandae.</p>
                        </div>
                    </div>
                     <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                     <img src={certificate} className="feature-card-img" alt="" style={{maxWidth: "60px",marginRight: "5px"}}/>
                        <div className="feature-card-textbox">
                            <h1>ISO Certified Certificates</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero deleniti nemo et.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                    <img src={intern}  style={{maxWidth: "60px",marginRight: "5px"}} className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Free Internship</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum corporis delectus repudiandae.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                        <img src={jobinterview}  style={{maxWidth: "60px",marginRight: "5px"}} className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Job Interview Preparation</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum corporis delectus repudiandae.</p>
                        </div>
                    </div>
                     <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                     <img src={instructor}  style={{maxWidth: "60px",marginRight: "5px"}} className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>One to One Interaction</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum corporis delectus repudiandae.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                    <img src={independent}  style={{maxWidth: "60px",marginRight: "5px"}} className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Tips to generate Income</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum corporis delectus repudiandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
