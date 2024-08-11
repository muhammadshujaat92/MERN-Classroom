import React, { useContext, useEffect, useState } from 'react'
import Assignment from "./Assignment";
import AssignmentBar from "./AssignmentBar";
import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Context from '../context/classes/Context';
import AssignmentSubmission from './AssignmentSubmission';

const Classwork = () => {
  let { classname, section } = useParams();
  const context = useContext(Context);
  const { assignment, fetchAssignment } = context;
  const [fetchId, setFetchId] = useState('');


  useEffect(() => {
    fetchAssignment()
    document.title = "Class work"
    console.log(assignment);
    // getIDs()
  }, [])

  const getIDs = () => {
    let IDs = []
    assignment.map((data) => {
      IDs.push(data.room)
    })
    console.log(IDs);
  }

  return (
    <>
      <Navbar2 classname={classname} section={section} />
      <Assignment />

      <div className="container d-flex align-items-center justify-content-md-around my-3">
        <button
          className="btn btn-primary rounded-pill font create-btn"
          data-bs-toggle="modal" data-bs-target="#assignmentModal"
        >
          <span className="material-symbols-outlined create-plus-btn">add</span>
          Create
        </button>
        <div className="d-md-flex d-none align-items-center blue-text">
          <div className="d-flex align-items-center calender-drive p-2">
            <div className="material-symbols-outlined fs-5">calendar_today</div>
            <span className="font ms-2">Google Calender</span>
          </div>
          <div className="d-flex align-items-center calender-drive p-2">
            <div className="material-symbols-outlined fs-5 ms-2">
              add_to_drive
            </div>
            <span className="font ms-2">Class Drive folder</span>
          </div>
        </div>
      </div>


      {
        assignment.length === 0 ? (
          <h4 key="no-assignment" className='text-center mt-5'>No Assignment for this class</h4>
        ) : (
          assignment.map((data) => (
            <AssignmentBar key={data._id} data={data} id={data._id} room={data.room} />
          ))
        )
      }


    </>
  );
};

export default Classwork;
