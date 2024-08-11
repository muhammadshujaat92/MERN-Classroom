import React, { useContext, useEffect } from 'react'
import Context from '../context/classes/Context';
import { Link } from 'react-router-dom';

const ClassItems = (props) => {
    const { data, updateClass } = props;
    const context = useContext(Context);
    const { deleteClass, fetchAssignment } = context;

    // useEffect(() => {
    //     fetchAssignment(data._id)
    // },[])

    let classname = data.classname;
    // Check if classname length is greater than 20 characters
    if (classname.length > 20) {
        // Truncate the string and add three dots
        classname = `${classname.substring(0, 20)}...`;
    }
    return (

        <div className="card new-card me-4 mb-4">
            <div className='image-div'></div>
            <div className="card-img-overlay d-flex justify-content-between">
                <Link to={`/myclass/${classname}/${data.section}`} className='text-light text-decoration-none links'>
                    <div className='cl-name'>{classname}</div>
                    <div className='cl-section'>{data.section}</div>
                </Link>
                <div className="dropdown">
                    <span className="material-symbols-outlined text-white p-2 rounded-5 class-icons-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        more_vert
                    </span>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item edit-dele-btn" onClick={() => updateClass(data)}>Edit</a></li>
                        <li><a className="dropdown-item edit-dele-btn" onClick={() => deleteClass(data._id)}>Delete</a></li>
                    </ul>
                </div>

            </div>
            <div className="card-body">
                <p className='card-body-hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum perferendis et dolorem natus quidem cupiditate </p>
            </div>
            <div className="card-footer bg-white">
                <div className='d-flex align-items-center justify-content-end'>
                    <span title='Open student record cards for "OOP sec C"' className="material-symbols-outlined me-2 p-2 rounded-5 class-icons">
                        trending_up
                    </span>
                    <span title='Open folder for "OOP sec C ROBO C" in Google Drive' className="material-symbols-outlined p-2 rounded-5 class-icons">
                        folder
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ClassItems