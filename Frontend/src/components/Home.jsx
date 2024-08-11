import homeimg from '../assets/homeimg.png'
import arrowimg from '../assets/arrow.png'
import Modal from './Modal'
import Joinclass from './Joinclass'

const Home = () => {
  return (
    <>
    <Modal/>
    <Joinclass/>
      <div className='main d-flex flex-column'>
        <div className="text-end main-child invisible">
          <img src={arrowimg} />
          <p className='text-body-secondary'>Don't see your classes? <br /> Try another account</p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column h-100">
          <img src={homeimg} />
          <p>Add a class to get started</p>
          <div>
            <button className="btn btn-outline-primary px-3 me-2 border-0" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Create class</button>
            <button className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#joinClassModal">Join class</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
