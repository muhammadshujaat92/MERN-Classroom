import React, { useContext, useRef, useState } from 'react'
import Context from '../context/classes/Context';

const Assignment = () => {
    const [input, setInput] = useState({ room: "", title: "", description: "", due: "" });
    const context = useContext(Context);
    const { createAssignment } = context;
    const refClose = useRef(null);

    const OnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const postAssignment = () => {
        createAssignment(input.room, input.title, input.description, input.due)
        setInput({ room: "", title: "", description: "", due: "" })
        // window.location.reload()
        refClose.current.click()
    }

    return (
        <>
            <div className="modal fade" id="assignmentModal" tabIndex="-1" aria-labelledby="assignmentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close m-0 assign-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
                            <span className="material-symbols-outlined mx-md-2 mx-1 p-2 rounded-5 text-primary bg-info-subtle assign-icon">assignment</span>
                            <h1 className="modal-title fs-5 assign-title" id="exampleModalLabel">Assignment</h1>
                            <button className='btn text-white rounded-0 px-md-4 px-3 ms-auto assign-btn' disabled={!input.room || !input.title || !input.description || !input.due} onClick={postAssignment}>Assign</button>
                        </div>
                        <div className="modal-body p-0 d-flex flex-column flex-lg-row">

                            <div className='bg-light h-100 p-lg-4 assign-div'>
                                <div className='bg-white p-4 mb-4 rounded-3 border'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0 bg-light floting-inp" id="floatingInput" placeholder="Title" name='title' onChange={OnChange} value={input.title} />
                                        <label htmlFor="floatingInput">Title</label>
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control rounded-0 bg-light floting-text" placeholder="Instructions (optional)" id="floatingTextarea" name='description' onChange={OnChange} value={input.description}></textarea>
                                        <label htmlFor="floatingTextarea">Instructions (optional)</label>
                                    </div>
                                </div>
                                <div className='bg-white p-4 rounded-3 border assign-attach-icons d-none'>
                                    <p className="font">Attach</p>
                                    <div className='d-flex align-items-center justify-content-center pb-1'>

                                        <div className='d-flex flex-column align-items-center me-2'>
                                            <span className="material-symbols-outlined p-2 rounded-5 border g-add fs-2">add_to_drive</span>
                                            <span className="font">Drive</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-4'>
                                            <span className="material-symbols-outlined p-2 rounded-5 border y-icon fs-2">youtube_activity</span>
                                            <span className="font">YouTube</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-2'>
                                            <span className="material-symbols-outlined p-1 fs-1 rounded-5 border g-add">add</span>
                                            <span className="font">Create</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-4'>
                                            <span className="material-symbols-outlined text-primary p-2 rounded-5 border fs-2">upload</span>
                                            <span className="font">Upload</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center ms-2'>
                                            <span className="material-symbols-outlined text-primary p-2 rounded-5 border fs-2">link</span>
                                            <span className="font">Link</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='assign-div-2 p-4'>
                                <h1 className="font">For</h1>
                                <div className="d-flex my-3">
                                    <div>
                                        <input className='bg-light border-0 due-input font p-3 w-100 hover' placeholder='Room no.' type="text" name="room" value={input.room} onChange={OnChange} autoComplete='off' />
                                    </div>

                                    <div className="dropdown">
                                        <button className="ms-3 dropdown-toggle bg-light font hover" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            All students
                                        </button>
                                        <ul className="dropdown-menu hidden-drop-menu">
                                            <li className='d-flex align-items-center'>
                                                <input className='ms-2' type="checkbox" checked onChange={OnChange} />
                                                <span className="material-symbols-outlined p-1 rounded-5 bg-primary text-white ms-2">
                                                    group
                                                </span>
                                                <a className="dropdown-item" href="#">All students</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className='inp-div'>
                                    <h1 className="font">Points</h1>
                                    <input type="text" className='points-input bg-light hover my-2' value={100} onChange={OnChange} />
                                </div>

                                <div>
                                    <h1 className="font mt-2">Due</h1>
                                    <div className="my-3">
                                        <input type="text" className='bg-light border-0 due-input font p-3 w-100 hover' placeholder='No due date' name='due' onChange={OnChange} value={input.due} />
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font">Topic</h1>
                                    <div className="dropdown my-3">
                                        <button className="btn dropdown-toggle font bg-light w-100 text-start hover d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            No topic
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item" href="#">No topic</a></li>
                                            <li><a className="dropdown-item" href="#">Create topic</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font">Rubric</h1>
                                    <button className='btn d-flex align-items-center font border border-dark-subtle disabled opacity-50'><span className="material-symbols-outlined">add</span>Rubric</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment
