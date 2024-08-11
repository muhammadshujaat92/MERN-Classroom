import React from "react";

const TeacherAnnounce = (props) => {
  return (
    <>
      <div className="hidden-div p-4 rounded my-4">
        <h4 className="hidden-h4">For</h4>
        <div className="d-flex">
          <select className="font" disabled="disabled">
            <option>OOP sec C ROBO C</option>
          </select>

          <div className="dropdown">
            <button
              className="ms-3 dropdown-toggle font"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All students
            </button>
            <ul className="dropdown-menu hidden-drop-menu">
              <li className="d-flex align-items-center">
                <input className="ms-2" type="checkbox" checked />
                <span className="material-symbols-outlined p-1 rounded-5 bg-primary text-white ms-2">
                  group
                </span>
                <a className="dropdown-item" href="#">
                  All students
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="form-floating mt-4 textarea-div">
          <textarea
            className="form-control h-100 bg-light rounded-0"
            id="exampleFormControlTextarea1"
            placeholder="Announce something to your class"
          ></textarea>
          <label htmlFor="floatingTextarea">
            Announce something to your class
          </label>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <span
              title="Add Google Drive file"
              className="material-symbols-outlined blue-icon p-2 rounded-5 border"
            >
              add_to_drive
            </span>
            <span
              title="Add YouTube video"
              className="material-symbols-outlined blue-icon p-2 rounded-5 border mx-2"
            >
              youtube_activity
            </span>
            <span
              title="Upload file"
              className="material-symbols-outlined blue-icon p-2 rounded-5 border me-2"
            >
              upload
            </span>
            <span
              title="Add link"
              className="material-symbols-outlined blue-icon p-2 rounded-5 border"
            >
              link
            </span>
          </div>

          <div className="d-flex">
            <button
              className="font cancel-btn me-4"
              onClick={() => props.cancelAnnounce(false)}
            >
              Cancle
            </button>
            <button className="btn btn-primary rounded-0 rounded-start-1 font me-1 px-4">
              Post
            </button>
            <div class="dropdown">
              <button
                class="btn btn-primary drop-btn rounded-0 rounded-end-1 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              {/* <ul class="dropdown-menu post-dropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Post
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Schedule
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Save draft
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherAnnounce;
