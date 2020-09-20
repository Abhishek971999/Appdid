import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Faq from './Faq'
import react from '../courseContent/react.json'
import python from '../courseContent/python.json'
import android from '../courseContent/android.json'
import fullstack from '../courseContent/fullstack.json'
import certificate from '../images/certificate.png'
import curriculum from '../images/curriculum.png'
import instructor from '../images/instructor.png'
import emailjs from 'emailjs-com';

const sendEmail = (e)=> {
    e.preventDefault();
    emailjs.sendForm('appdid_training', 'template_gskp8ci', e.target, 'user_Vca6PxB5Xjs3OBfUljmrZ')
    .then((result) => {
        document.getElementById("closeModal").click();
    }, (error) => {
        console.log(error.text);
    });
      e.target.reset();
    
  }
function CourseDetails({match:{params:{coursename}}}) {
    console.log(coursename)
    let course;
    switch (coursename) {
        case "react-firebase-web-development":
            course= react;
            break;
        case "fullstack-website-development":
            course = fullstack;
          break;
        case "python-course":
            course = python;
          break;
       
        case "application-development":
            course =android;
          break;
      }
    return (
        <div className="course-detail">
            <div className="course-detail-header">
               <Navbar />
                <h1>{course.courseName}</h1>
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
            <div className="course-detail-syllabus">
                <div className="row course-detail-syllabus-row">
                    <div className="col-sm-12 col-lg-6 syllabus-overview">
                        <div className="row justify-content-center syllabus-overview-row">
                            <div className="col-sm-12 col-md-10">
                            <div className="row justify-content-center flex-container-box">
                                <div className="col-sm-12 col-md-5 flex-container container1">
                                    <h1>{`${course.totalSections} Sections`}</h1>
                                </div>
                                <div className="col-sm-12 col-md-5 flex-container container2">
                                <h1>{`${course.totalTopics} Topics`}</h1>
                                </div>
                                <div className="col-sm-12 col-md-5 flex-container container3">
                                    <h1>{`${course.totalProjects} Projects`}</h1>
                                </div>
                                <div className="col-sm-12 col-md-5 flex-container container4">
                                    <h1>{course.language}</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button data-toggle="modal" data-target="#EnrollNow">Enroll Now</button>
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
                    <div className="col-sm-12 col-lg-6 syllabus-content">
                        <div className="container">
                            <h1>Syllabus</h1>
                            <div className="accordion" id="syllabusAccordion">
                              {
                                  course.syllabusDropdown?(
                                    course.syllabus.map((s,key)=>{
                                        return(
                                          <div className="syllabus-card" key={key}>
                                              <div className="syllabus-card-header" id={s.syllabusCardID}>
                                              <h2 className="mb-0">
                                                  <button className="syllabus-collapse-button d-flex" type="button" data-toggle="collapse" data-target={`#${s.id}`} aria-expanded="true" aria-controls={s.id}>
                                                  {s.syllabusCardName}
                                                        <span className="flex-1 justify-content-end flex-grow-1 text-right">
                                                          <i className="fas fa-chevron-down ml-4"></i>
                                                        </span>
                                                  </button>
                                              </h2>
                                              </div>
                                              <div id={s.id} className="collapse syllabus-collapse-content" aria-labelledby={s.syllabusCardID} data-parent="#syllabusAccordion">
                                                  <ul>
                                                      {
                                                          s.syllabusCardContent.map((content,key)=>{
                                                              return(
                                                                  <li key={key}>{`${key+1}. ${content}`}</li>
                                                              )
                                                          })
                                                      }
                                                  </ul>
                                              </div>
                                          </div>
                                        )
                                    })
                                  ):(
                                      course.syllabus.map((s,key)=>{
                                          return(
                                            <div className="syllabus-card2" key={key}>
                                                <h2>{s.name}</h2>
                                                <ul>
                                                    {
                                                        s.syllabus.map((content,key)=>{
                                                            return(
                                                                <li key={key}>{`${key+1}. ${content}`}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                          )
                                      })
                                  )
                              }
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
                            <img src={instructor} className="feature-card-img" alt="" style={{maxWidth: "60px",marginRight: "5px"}}/>
                            <div className="feature-card-textbox">
                                <h1>Instructor</h1>
                                <p>Our superlative faculty, an alumnus of IITs, IIITs and Stanford are resourceful, humble, organised and provide instantaneous assistance to the students.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                        <img src={curriculum} className="feature-card-img" alt="" style={{maxWidth: "60px",marginRight: "5px"}}/>
                            <div className="feature-card-textbox">
                                <h1>Curriculum</h1>
                                <p>The curriculum has been designed with the guidance from the industry mentors to help you give a solid foundation in the concepts that hold importance in the professional world.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex feature-card my-4">
                            <img src={certificate} className="feature-card-img" alt="" style={{maxWidth: "60px",marginRight: "5px"}}/>
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
                    <Faq />
                </div>
            </div>
        
            <Footer />
        </div>
    )
}

export default CourseDetails
