import React from 'react'

function Skills() {
    return (
        <div className="skill-section">
         <div className="container">
         <div className="row justify-content-center">
                    <div className="col-sm-12 col-lg-6 m-0">
                        <img className="skill-section-img" src="https://codingphase.com/wp-content/uploads/2019/12/seven-img5.png" alt=""/>
                    </div>
                    <div className="col-sm-12 col-lg-5 skill-section-textBox m-0">
                        <p>OUR FEATURED SERVICES</p>
                        <h1>What type of skills can I get if I sign up?</h1>
                        <p className="skill-para">We teach you everything you need to get a job as a web developer but we also give you exposure to other types of skills.</p>
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-md-5 d-flex skill-section-card my-2 ">
                                <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-shape5.png" alt=""/>
                                <div className="skill-section-cardtext">
                                    <h1>Front End</h1>
                                    <p>HTML, CSS, Javascript</p>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-5 d-flex skill-section-card my-2">
                            <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-shape5.png" alt=""/>
                                <div className="skill-section-cardtext">
                                    <h1>Backend</h1>
                                    <p>Node, PHP, Ruby, Python</p>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-5 d-flex skill-section-card ">
                                <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-shape5.png" alt=""/>
                                <div className="skill-section-cardtext">
                                    <h1>Mobile Apps</h1>
                                    <p>React Native</p>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-5 d-flex skill-section-card">
                                <img src="https://codingphase.com/wp-content/uploads/2019/09/seven-shape5.png" alt=""/>
                                <div className="skill-section-cardtext">
                                    <h1>Industry Training</h1>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
        </div>
    )
}

export default Skills
