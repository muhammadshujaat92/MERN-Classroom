import React, { useState } from 'react'
import userImg from "../assets/user2.png";

const Announcement = () => {
    const [post, setPost] = useState('');

    const handleTextareaChange = (event) => {
        setPost(event.target.value);
        event.target.style.height = 'auto'
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
        <div className='border pt-3 mb-4 rounded-3'>
            <div className="border-bottom pb-3">
                <div className='d-flex align-items-center justify-content-between mb-2'>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3'>
                            <img src={userImg} className='rounded-circle' />
                        </div>
                        <div>
                            <p className='m-0 font lh-1'>Muhammad Shujaat Ullah Khan</p>
                            <span className='light-font'>7 Nov</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <span className="material-symbols-outlined p-2 rounded-5 me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            more_vert
                        </span>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item edit-dele-btn">Edit</a></li>
                            <li><a className="dropdown-item edit-dele-btn">Delete</a></li>
                        </ul>

                    </div>
                </div>
                <p className='ps-3 light-font'>Complete This</p>
            </div>

            <div>

                <div>
                    <button className="btn rounded-0 font my-2 border-0 comments-btn d-flex align-items-center"><span className="material-symbols-outlined me-2">group</span>6 class comments</button>
                    <div>
                        <div className='d-flex align-items-center justify-content-between mb-2'>
                            <div className='d-flex align-items-center'>
                                <div className='mx-3'>
                                    <img src={userImg} className='rounded-circle' width={"34px"} />
                                </div>
                                <div>
                                    <p className='m-0 font'>Muhammad Shujaat Ullah Khan <span className='date-span'>7 Nov</span></p>
                                    <span className='comment-span'>By tommorow</span>
                                </div>
                            </div>
                            <div className="dropdown">
                                <span className="material-symbols-outlined p-2 rounded-5 me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item edit-dele-btn">Edit</a></li>
                                    <li><a className="dropdown-item edit-dele-btn">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center py-3'>
                    <div className='mx-3'>
                        <img src={userImg} className='rounded-circle w-100' />
                    </div>
                    <div className="w-100">
                        <textarea className="form-control rounded-4 light-font" placeholder='Add class comment...' id="exampleFormControlTextarea2" name='post' value={post} rows="1" onChange={handleTextareaChange}></textarea>
                    </div>

                    <span className={`${!post ? "opacity-25" : ""} material-symbols-outlined mx-3 me-4`}>
                        send
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Announcement