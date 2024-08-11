import axios from 'axios';
import React, { useEffect } from 'react'

const AssignmentSubmission = ({ data }) => {
    const showPdf = (pdf) => {
        window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    };

    useEffect(() => {
        console.log("rendering");
    }, [])

    return (
        <>
            <div className="modal fade" id="submission" tabIndex="-1" aria-labelledby="submission" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="submission">Student Work</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className='row border-bottom pb-1 align-items-center'>
                                    <h4 className='col submission-fonts'>{data.title}</h4>
                                    <h6 className='col submission-fonts'>Due: {data.due}</h6>
                                </div>

                            </div>

                            <div className='container py-3'>

                                <div className="row">
                                    <div className='border-end col text-center'>
                                        <h5 className='pb-2 border-bottom submission-fonts'>Name</h5>
                                    </div>
                                    <div className='border-end col text-center'>
                                        <h5 className='pb-2 border-bottom submission-fonts'>Roll no.</h5>
                                    </div>
                                    <div className='col text-center'>
                                        <h5 className='pb-2 border-bottom submission-fonts'>File</h5>
                                    </div>
                                </div>

                                {
                                    data.submission == null ? "" : data.submission.map((data) => {
                                        return <div key={data._id} className="row">
                                            <div className="col text-center d-flex justify-content-center align-items-center border-end">
                                                <p className="font">{data.name}</p>
                                            </div>
                                            <div className="col text-center d-flex justify-content-center align-items-center border-end">
                                                <p className="font">{data.rollNo}</p>
                                            </div>
                                            <div className="col text-center d-flex justify-content-center align-items-center">
                                                <p className='font text-primary' style={{ cursor: "pointer" }} onClick={() => showPdf(data.pdf)}>Open file</p>
                                            </div>
                                        </div>
                                    })
                                }


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignmentSubmission