import React, { useContext, useEffect, useState } from "react";
import Context from "../context/classes/Context";
import axios from "axios";
import AssignmentSubmission from "./AssignmentSubmission";

const AssignmentBar = ({ data, id, room }) => {
  const context = useContext(Context);
  const { fetchAssignment } = context;
  const [submitAssignData, setSubmitAssignData] = useState({ name: "", rollNo: "" });
  const [pdf, setPdf] = useState();
  const host = "http://localhost:5000"

  useEffect(() => {
    // fetchAssignment(room)
    console.log(data);
  }, [])

  const OnChange = (e) => {
    setSubmitAssignData({ ...submitAssignData, [e.target.name]: e.target.value });
  };

  const { name, rollNo } = submitAssignData

  // const formData = new FormData();
  // formData.append("name", name);
  // formData.append("rollNo", rollNo);
  // formData.append("pdf", pdf);

  // const submitAssignment = async (id) => {
  //   try {
  //     const response = await axios.post(`${host}/assignment/submitassignment/${id}`, formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'auth-token': localStorage.getItem('Token')
  //         }
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error submitting assignment:', error);
  //   }
  // };

  const submitAssignment = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("rollNo", rollNo);
      formData.append("pdf", pdf);

      const response = await axios.post(
        `${host}/assignment/submitassignment/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
            'auth-token': localStorage.getItem('Token')
          }
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };


  return (
    <>

      <AssignmentSubmission data={data} />

      <div className="modal fade" id="viewSubmission" tabIndex="-1" aria-labelledby="viewSubmission" aria-hidden="true" data-backdrop="false">
        <div className="modal-dialog modal-dialog-centered">
          <form className="w-100" onSubmit={submitAssignment} >
            <div className="modal-content">
              <div className="modal-body">

                <div className="form-floating mb-3">
                  <input autoComplete="off" type="text" className="form-control font" id="name" placeholder="name@example.com" name="name" onChange={OnChange} value={submitAssignData.name} />
                  <label htmlFor="name" className="font">Name</label>
                </div>
                <div className="form-floating">
                  <input autoComplete="off" type="text" className="form-control font" id="rollno" placeholder="Password" name="rollNo" onChange={OnChange} value={submitAssignData.rollNo} />
                  <label htmlFor="rollNo" className="font">Roll no</label>
                </div>
                <div className="mt-3">
                  <input className="form-control font" accept="application/pdf" type="file" id="pdf" onChange={(e) => setPdf(e.target.files[0])} />
                  <label htmlFor="pdf" className="form-label font text-danger">Upload only PDF file</label>
                </div>


              </div>
              <div className="text-end pb-2">
                <button type="button" className="btn font " data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn font text-primary" data-bs-dismiss="modal">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container d-flex align-items-center flex-column">
        <div className="accordian-p w-100 rounded-3">
          <div
            className="work-lists rounded-3 accordion accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={`#${id}`}
          >
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined p-2 rounded-5 bg-primary text-white me-3">
                assignment
              </span>
              <span className="font">{data.title}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="font opacity-50 me-3">{data.due}</span>
              <span className="material-symbols-outlined p-2 rounded-5">
                more_vert
              </span>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-top-0 rounded-top-0">
              <div
                id={id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordian-font">Posted Yesterday</p>
                  <div className="d-flex justify-content-between">
                    <span className="font">{data.description}</span>
                    <div className="d-flex">
                      <div className="border-start px-3">
                        <h1 className="fw-normal">0</h1>
                        <span className="font">Turned in</span>
                      </div>
                      <div className="border-start px-3">
                        <h1 className="fw-normal">0</h1>
                        <span className="font">Assigned</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top mt-4 p-3 d-flex justify-content-between align-items-center">
                  <span className="font text-primary" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#viewSubmission" >Submit Assignment</span>
                  <span type="button" className="font text-primary" data-bs-toggle="modal" data-bs-target="#submission" style={{ cursor: "pointer" }}>
                    View Submission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentBar;
