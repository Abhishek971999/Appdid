import React from 'react'
import CountUp from "react-countup";
import Navbar from './Navbar'
import Footer from './Footer'
import nmims1 from '../images/nmims1.PNG'
import nmims2 from '../images/nmims2.PNG'
import nmims3 from '../images/nmims3.PNG'
import appdevstudent1 from '../images/appdevstudent1.PNG'
import appdevstudent2 from '../images/appdevstudent2.PNG'
import appdevstudent3 from '../images/appdevstudent3.PNG'
import appdevstudent4 from '../images/appdevstudent4.PNG'
import appdevstudent5 from '../images/appdevstudent5.PNG'
import appdevstudent6 from '../images/appdevstudent6.PNG'
import appdevstudent7 from '../images/appdevstudent7.PNG'
import appdevstudent8 from '../images/appdevstudent8.PNG'
import kc1 from '../images/kc1.PNG'
import kc2 from '../images/kc2.PNG'
import kc3 from '../images/kc3.PNG'
import kc4 from '../images/kc4.PNG'
import dypatil from '../images/dypatil.PNG'
import dypatil1 from '../images/dypatil1.PNG'
import gpm1 from '../images/gpm1.PNG'
import bhartividyapeeth from '../images/bhartividyapeeth.PNG'
import bhartividyapeeth2 from '../images/bhartividyapeeth2.PNG'
function Gallery() {
    return (
        <div className="gallery-page">
             <div className="gallery-page-header">
               <Navbar />
                <h1>Gallery</h1>
            </div>
            <div style={{padding:"30px"}}>
                <div className="gallery-section">
                    <div className="row justify-content-center counter-section-box">
                        <div className="col-sm-12 col-md-4">
                           <h1 className="text-center"> <CountUp start={0} end={100} duration={5} suffix="+ College Visited" /></h1>
                        </div>
                        <div className="col-sm-12 col-md-4">
                           <h1 className="text-center"> <CountUp start={0} end={1000} duration={5} suffix="+ Students Trained" /></h1>
                        </div>
                        
                    </div>
                     <div className=" row justify-content-center mb-2">
                        <div className="col-sm-12 col-md-10 img-gal img-gal-1">
                            <div className="kc1 gal-container">
                                <img src={kc1} alt=""/>
                            </div>
                            <div className="kc2 gal-container">
                                <img src={kc2} alt=""/>
                            </div>
                            <div className="kc3 gal-container">
                                <img src={kc3} alt=""/>
                            </div>
                            <div className="dypatil gal-container">
                                <img src={dypatil} alt=""/>
                            </div>
                            <div className="kc4 gal-container">
                                <img src={kc4} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className=" row justify-content-center mb-2">
                        
                        <div className="col-sm-12 col-md-10 img-gal img-gal-2">
                            <div className="nmims1 gal-container">
                                <img src={nmims1} alt=""/>
                            </div>
                            <div className="nmims2 gal-container">
                                <img src={nmims2} alt=""/>
                            </div>
                            <div className="nmims3 gal-container">
                                <img src={nmims3} alt=""/>
                            </div>
                            <div className="appdevstudent2 gal-container">
                                <img src={appdevstudent2} alt=""/>
                            </div>
                            <div className="appdevstudent3 gal-container">
                                <img src={appdevstudent3} alt=""/>
                            </div>
                            <div className="appdevstudent1 gal-container">
                                <img src={appdevstudent1} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className=" row justify-content-center mb-2">
                        <div className="col-sm-12 col-md-10 img-gal img-gal-3">
                            <div className="dypatil1 gal-container">
                                <img src={dypatil1} alt=""/>
                            </div>
                            <div className="gpm1 gal-container">
                                <img src={gpm1} alt=""/>
                            </div>
                            <div className="appdevstudent4 gal-container">
                                <img src={appdevstudent4} alt=""/>
                            </div>
                            <div className="appdevstudent5 gal-container">
                                <img src={appdevstudent5} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className=" row justify-content-center mb-2">
                        <div className="col-sm-12 col-md-10 img-gal img-gal-4">
                            <div className="appdevstudent6 gal-container">
                                <img src={appdevstudent6} alt=""/>
                            </div>
                            <div className="appdevstudent7 gal-container">
                                <img src={appdevstudent7} alt=""/>
                            </div>
                            <div className="appdevstudent8 gal-container">
                                <img src={appdevstudent8} alt=""/>
                            </div>
                            <div className="bhartividyapeeth gal-container">
                                <img src={bhartividyapeeth} alt=""/>
                            </div>
                            <div className="bhartividyapeeth2 gal-container">
                                <img src={bhartividyapeeth2} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery
