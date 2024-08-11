import React, { useEffect } from "react";
import headerImg from "../assets/header.png";
import userImg from "../assets/user2.png";
import streamImg from "../assets/classstream.png";
import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";

const MyClass = () => {
  let { classname, section } = useParams()

  useEffect(() => {
    document.title = `${classname} ${section}`
  }, [])

  return (
    <>
      <Navbar2 classname={classname} section={section} />
      <div className="p-div mt-4 container-fluid">
        <div className="d-flex justify-content-center myclass-header px-2">
          <div style={{ width: "65rem", height: "15rem" }}>
            <img src={headerImg} className="w-100 rounded-3 d-none myclass-header-img h-100" />
            <div className="bg-primary myclass-header-div w-100 h-100 rounded-3"></div>
            <div className="myclass-classDetail text-white ps-4">
              <div className="myclass-cred">{classname}</div>
              <div className="fs-5">{section}</div>
            </div>
          </div>

        </div>
        <div className="d-flex class-code-p px-2 justify-content-center align-items-center flex-column flex-md-row">
          <div className="d-flex justify-content-center align-items-center flex-column me-md-5 class-code-h-p">
            <div className="class-code-h w-100 py-2 my-4 border border-2 rounded px-3">
              <div className="d-flex align-items-center justify-content-between">
                Class code
                <span className="material-symbols-outlined p-2 rounded-5">
                  more_vert
                </span>
              </div>
              <div className="class-code d-flex align-items-center">
                7c5cx71
                <span
                  title="Display"
                  className="material-symbols-outlined p-2 rounded-5"
                >
                  fullscreen
                </span>
              </div>
            </div>
            <div className="class-code-h w-100 pt-3 py-2 border border-2 rounded px-3">
              <p>Upcoming</p>
              <p className="opacity-50">No work due in soon</p>
              <div className="d-flex justify-content-end">
                <button className="view-button fw-semibold">View all</button>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column announce-class-p w-100 justify-content-evenly">
            {/* {announce === true ? ( */}
            {/* <TeacherAnnounce cancelAnnounce={setAnnounce} /> */}
            {/* ) : ( */}
            <div className="d-flex align-items-center announce-child rounded my-4">
              <img src={userImg} className="rounded-5 mx-3" />
              <a
                className="text-decoration-none me-auto"
              >
                Announce something to your class
              </a>
              <span
                title="Reuse post"
                className="material-symbols-outlined p-2 rounded-5 me-3"
              >
                repeat
              </span>
            </div>
            {/* )} */}

            <div className="d-flex align-items-center announce-child2 rounded py-3">
              <img src={streamImg} className="rounded-5 mx-3" />
              <div className="px-3">
                <h5 className="text-primary">
                  This is where you can talk to your class
                </h5>
                <p>
                  Use the stream to share announcements, post assignments and
                  respond to student questions
                </p>
                <button className="d-flex setting-button border ms-auto">
                  <span className="material-symbols-outlined me-1">settings</span>
                  Stream settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClass;
