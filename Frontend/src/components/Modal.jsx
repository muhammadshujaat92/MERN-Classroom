import React, { useState,useContext } from 'react'
import Context from '../context/classes/Context';
import { useNavigate, useParams } from 'react-router-dom';

const Modal = () => {
    const [isChecked, setIsChecked] = useState(false);
    const[classCredentials,setClassCredentials] = useState({classname:"",section:"",subject:"",room:""})
    const context = useContext(Context)
    const{addClass} = context;
    const Navigate = useNavigate();

    // let { classname, section } = useParams()
    // if (classname.length > 52) {
    //   // Truncate the string and add three dots
    //   classname = `${classname.substring(0, 52)}...`;
    // }
    
    const OnChange = (e) => {
      setClassCredentials({ ...classCredentials, [e.target.name]: e.target.value });
    };

    const AddClass = ()=>{
      addClass(classCredentials.classname,classCredentials.section,classCredentials.subject,classCredentials.room)
      setIsChecked(false)
      Navigate(`/myclass/${classCredentials.classname}/${classCredentials.section}`)
      setClassCredentials({classname:"",section:"",subject:"",room:""})
    }

    return (
        <>
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="ps-3 pt-3">
              <h3 className="modal-title fs-6" id="exampleModalToggleLabel2">Create class</h3>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input autoComplete='off' type="text" className="form-control border-0 float-inpt rounded-0" id="classname" placeholder="Class name (required)" name='classname' value={classCredentials.classname} onChange={OnChange} />
                <label htmlFor="classname">Class name (required)</label>
              </div>
              <div className="form-floating mb-3">
                <input autoComplete='off' type="text" className="form-control border-0 float-inpt rounded-0" id="section" placeholder="Section" name='section' value={classCredentials.section} onChange={OnChange} />
                <label htmlFor="section">Section</label>
              </div>
              <div className="form-floating mb-3">
                <input autoComplete='off' type="text" className="form-control border-0 float-inpt rounded-0" id="subject" placeholder="Subject" name='subject' value={classCredentials.subject} onChange={OnChange} />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <input autoComplete='off' type="text" className="form-control border-0 float-inpt rounded-0" id="room" placeholder="Room" name='room' value={classCredentials.room} onChange={OnChange} />
                <label htmlFor="room">Room</label>
              </div>
            </div>
            <div className="d-flex justify-content-end p-3">
              <a type="button" className="text-decoration-none text-dark" data-bs-dismiss="modal" onClick={() => setIsChecked(false)}>Cancel</a>
              <button type="button" className={`border-0 text-decoration-none ms-3 text-primary btn btn-white p-0 dis-btn`} data-bs-dismiss="modal" onClick={AddClass} disabled={classCredentials.classname.trim() === '' || classCredentials.section.trim() === '' || classCredentials.subject.trim() === '' || classCredentials.room.trim() === ''}>Create</button>
            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-md-3">
            <div className="ps-3 pt-3">
              <h3 className="modal-title fs-6" id="exampleModalToggleLabel">Using Classroom at a school/university with students?</h3>
            </div>
            <div className="modal-body">
              <p>If so, your school must sign up for a <a className='text-decoration-none links' href='https://edu.google.com/intl/en_GB/workspace-for-education/editions/education-fundamentals/#how-to'>Google Workspace for Education</a> account before you can use Classroom. <a className='text-decoration-none links' href="https://support.google.com/edu/classroom/answer/6025224?hl=en-GB&authuser=0">Learn more</a></p>
              <p>Google Workspace for Education lets schools/universities decide which Google services their students can use, and provides additional <a className='text-decoration-none links' href="https://edu.google.com/intl/en_GB/why-google/privacy-security/">privacy and security</a> protection that is important in a school or university setting. Students cannot use Google Classroom in a school or university with their personal accounts.</p>
            </div>
            <div className="form-check px-4 py-3 ps-5 ms-md-3 inputs">
              <input checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="form-check-input fs-5 mt-2 border-black" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label ms-1" htmlFor="flexCheckDefault">
                I've read and understand the above notice, and I'm not using Classroom at a school/university with students
              </label>
            </div>
            <div className="d-flex justify-content-end p-3">
              <a type="button" className="text-decoration-none text-dark" data-bs-dismiss="modal" onClick={() => setIsChecked(false)}>Go back</a>
              <button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" type="button" className={`${isChecked ? '' : 'disabled text-dark opacity-50'} border-0 text-decoration-none ms-3 text-primary btn btn-white p-0 dis-btn`}>Continue</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Modal
