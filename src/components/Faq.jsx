import React from 'react'
import faq1 from '../courseContent/faq1.json'
import faq2 from '../courseContent/faq2.json'
function Faq() {
    return (
        <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
            <div className="accordion" id="faqAccordion">
             
                        {
                        faq1.map((f,key)=>{
                            return(
                                <div className="course-accordion-card" key={key}>
                                    <div className="course-accordion-card-header" id={f.headerID}>
                                        <h2 className="mb-0">
                                            <button className="accordion-collapse-button collapsed d-flex" type="button" data-toggle="collapse" data-target={`#${f.dataTarget}`} aria-expanded="false" aria-controls={f.dataTarget}>
                                            {f.question}
                                            <span className="flex-1 justify-content-end flex-grow-1 text-right">
                                                <i className="fas fa-chevron-down ml-4"></i>
                                            </span>
                                            </button>
                                        </h2>
                                        </div>
                                        <div id={f.dataTarget} className="collapse" aria-labelledby={f.headerID} data-parent="#faqAccordion">
                                        <div className="course-accordion-card-body">
                                        {f.answer}
                                        </div>
                                        </div>
                                </div>

                        )
                    })
                }
             
            </div>
        </div>
        <div className="col-sm-12 col-lg-6">
            <div className="accordion" id="faqAccordion">
            {
                        faq2.map((f,key)=>{
                            return(
                                <div className="course-accordion-card" key={key}>
                                    <div className="course-accordion-card-header" id={f.headerID}>
                                        <h2 className="mb-0">
                                            <button className="accordion-collapse-button collapsed d-flex" type="button" data-toggle="collapse" data-target={`#${f.dataTarget}`} aria-expanded="false" aria-controls={f.dataTarget}>
                                            {f.question}
                                            <span className="flex-1 justify-content-end flex-grow-1 text-right">
                                                <i className="fas fa-chevron-down ml-4"></i>
                                            </span>
                                            </button>
                                        </h2>
                                        </div>
                                        <div id={f.dataTarget} className="collapse" aria-labelledby={f.headerID} data-parent="#faqAccordion">
                                        <div className="course-accordion-card-body">
                                        {f.answer}
                                        </div>
                                        </div>
                                </div>

                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default Faq
