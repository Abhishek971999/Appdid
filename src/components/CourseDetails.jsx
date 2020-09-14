import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import Footer from './Footer'
function CourseDetails() {
    return (
        <div className="course-detail">
            <div className="course-detail-header">
                <nav class="navbar navbar-expand-lg  bg-transparent p-1">
                    <div className="container">
                        <span class="navbar-brand ml-4 mb-0 h1">
                            <Link to="/"><img src={logo} alt="Appdid Training Logo" style={{maxHeight:'40px'}}/></Link>
                        </span>
                    </div>
                </nav>
                <h1>Full Stack Development</h1>
            </div>
            <div className="course-detail-author">
                <div className="container">
                    <div className="faculty">
                    <h1 style={{textAlign:'center'}}>Learn from the experts</h1>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="row justify-content-center faculty-section">
                            <div className="col-sm-12 col-md-4 course-faculty-imgBox">
                                <img src="https://randomuser.me/api/portraits/men/44.jpg" className="course-faculty-img" alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h1>Darshan Komu</h1>
                                <span>Co-Founder & Instructor</span>
                                <p>Experienced Founder with a demonstrated history of working in the information technology and services industry. </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="row justify-content-center faculty-section">
                            <div className="col-sm-12 col-md-4 course-faculty-imgBox">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" className="course-faculty-img" alt="" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h1>Rahul Yadav</h1>
                                <span>Co-Founder & Instructor</span>
                                <p>Strong business development professional with a Bachelor's degree focused in Computer Engineering.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="course-detail-features features">
            <div className="container">
                <div className="features-textbox text-center">
                    <h1>Features</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                        <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-icon1.png" className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Instructor</h1>
                            <p>Our superlative faculty, an alumnus of IITs, IIITs and Stanford are resourceful, humble, organised and provide instantaneous assistance to the students.</p>
                        </div>
                    </div>
                     <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                     <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-icon2.png" className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Curriculum</h1>
                            <p>The curriculum has been designed with the guidance from the industry mentors to help you give a solid foundation in the concepts that hold importance in the professional world.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                        <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-icon3.png" className="feature-card-img" alt=""/>
                        <div className="feature-card-textbox">
                            <h1>Certificate</h1>
                            <p>You will be awarded with a course completion certificate which is ISO Certified</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="course-detail-faq">
                <div className="container">
                    <h1 style={{textAlign:'center'}}>Most Frequent Questions</h1>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-6">
                            <div class="accordion" id="accordionExample">
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    how long does it take to complete this course ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                </div>
                                </div>
                            </div>
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is this course suitable for me ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                                </div>
                                </div>
                            </div>
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingFive">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Is this course suitable for me ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div class="accordion" id="accordionExample">
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    how long does it take to complete this course ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                </div>
                                </div>
                            </div>
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Is this course suitable for me ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                                </div>
                                </div>
                            </div>
                            <div class="course-accordion-card">
                                <div class="course-accordion-card-header" id="headingSix">
                                <h2 class="mb-0">
                                    <button class="accordion-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Is this course suitable for me ?
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <div class="course-accordion-card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </div>
    )
}

export default CourseDetails
