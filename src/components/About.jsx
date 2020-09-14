import React from 'react'
import jobready from '../images/jobready.png'
import realprojects from '../images/realprojects.png'
import financialfreedom from '../images/financialfreedom.png'
function About() {
    return (
        <div className="about-section">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <div className="row">
                        <div className="col-sm-10 col-md-5 p-0 fly-card">
                            <div className="card border-0 mb-2">
                                <div className="card-image">
                                    <img src={jobready} className="card-img-top" alt="Job Ready"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Job Ready</h5>
                                    <p className="card-text">Get the skills that are in demand in todays market</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-5 p-0 static-card">
                            <div className="card border-0 mb-2">
                                <div className="card-image">
                                    <img src={realprojects} className="card-img-top" alt="Real Projects"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Real Projects</h5>
                                    <p className="card-text">Build projects that simulate real scenarios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-md-5 p-0  fly-card">
                            <div className="card border-0 mb-2">
                                <div className="card-image">
                                    <img src={financialfreedom} className="card-img-top" alt="Financial Independence"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Financial Independence</h5>
                                    <p className="card-text">We focus on making sure you also know how to get passive income </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 about-textBox">
                    <p className="about-title">YOUR ULTIMATE PLATFORM</p>
                    <h1 className="about-maintext">Becoming a web developer is not just a job title but a career</h1>
                    <p className="about-subtext">Invest in your future</p>
                </div>
            </div>
        </div>
    )
}

export default About
