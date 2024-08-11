import React from 'react'
import { useNavigate } from 'react-router-dom'

const Offcanvas = () => {
  const Navigate = useNavigate();
  const handleNavigate = ()=>{
    Navigate('/')
  }
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-body px-0">
      <div>
        <ul className='ps-0 pe-2'>
          <li className='li-home d-flex rounded-end-pill p-3 list-unstyled' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleNavigate}><span className="material-symbols-outlined mx-2 me-3">
            home
          </span>Classes</li>
          <li className='d-flex rounded-end-pill p-3 list-unstyled'><span className="material-symbols-outlined mx-2 me-3">
            calendar_today
          </span>Calender</li>
        </ul>
        <hr />
        <ul className='ps-0 pe-2'>
          <li className='d-flex rounded-end-pill p-3 list-unstyled'><span className="material-symbols-outlined mx-2 me-3">
            archive
          </span>Archived classes</li>
          <li className='d-flex rounded-end-pill p-3 list-unstyled'><span className="material-symbols-outlined mx-2 me-3">
            settings
          </span>Setting</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Offcanvas
