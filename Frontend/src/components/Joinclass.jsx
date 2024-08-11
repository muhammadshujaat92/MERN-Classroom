import React, { useState, useContext, useRef, useEffect } from 'react'
import Context from '../context/classes/Context';
import userImg from '../assets/user2.png'
import { useNavigate } from 'react-router-dom';

const Joinclass = () => {
    const [Room, setRoom] = useState({ Joineroom: "" });
    const ref = useRef(null)
    const context = useContext(Context);
    const { joinClass, UserRes, getUsers } = context;
    const Navigate = useNavigate();

    useEffect(() => {
        getUsers()
    }, [])

    const classJoin = () => {
        joinClass(Room.Joineroom)
        ref.current.click()
        // Navigate(`/about`)
    }

    const OnChange = (e) => {
        setRoom({ ...Room, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div>
                <div className="modal fade" id="joinClassModal" tabIndex="-1" aria-labelledby="joinClassModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                <h1 className="modal-title fs-4 ms-4 opacity-50" id="exampleModalLabel">Join class</h1>
                                <button type="button" className="btn btn-primary ms-auto rounded-0 px-4" data-bs-dismiss="modal" ref={ref} disabled={!Room.Joineroom} onClick={classJoin}>Join</button>
                            </div>
                            <div className="modal-body d-flex flex-column align-items-center">

                                <div className="container border w-50 join-class-w rounded-3 p-3">
                                    <div className="row">
                                        <div className="col">
                                            <p>You're currently signed in as</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto p-0 mx-2" style={{width:"3rem"}}>
                                                <img className='rounded-circle w-100' src={`../src/uploads/${UserRes.image}`} />
                                            </div>
                                            <div className="col p-0">
                                                <p className='fw-semibold m-0'>{UserRes.firstname} {UserRes.lastname}</p>
                                                <p className='email-p m-0'>{UserRes.email}</p>
                                            </div>
                                            {/* <div className="col-auto p-0">
                                                <button className="btn btn-outline-primary fw-semibold px-4 rounded-0">Switch account</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="container border w-50 join-class-w rounded-3 py-4 px-4 mt-3">
                                    <h5>Class code</h5>
                                    <p>Ask your teacher for the class code, then enter here.</p>
                                    <div className="form-floating mb-3">
                                        <input type='number' className="form-control rounded-0 w-50 border-black" id="Joineroom" placeholder="Class code" name='Joineroom' value={Room.Joineroom} onChange={OnChange} />
                                        <label htmlFor="Joineroom">Class code</label>
                                    </div>
                                </div>

                                <div className="container w-50 join-class-w mt-3">
                                    <span className="fw-semibold font-style">To sign in with a class code</span>
                                    <li className='my-2'>Use an authorised account</li>
                                    <li className='mb-2'>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
                                    <p>If you have trouble joining the class, go to the <a href="#" className="text-decoration-none links">Help Center article</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Joinclass
