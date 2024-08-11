import React, { useEffect, useState } from 'react'
import googleImg from '../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'

// export const Logincomponent = ({childern,className})=>{
//   return (
//     <div className={className}>
//       {childern}
//     </div>
//   )
// }

const Login = () => {
  const [Credentials,setCredentials] = useState({email:"",password:""})
  const Navigate = useNavigate();

  const OnChange = (e)=>{
    setCredentials({...Credentials,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    document.title="Login"
},[])

  const handleSubmit = async()=>{
    const response = await fetch('http://localhost:5000/auth/loginuser',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({email:Credentials.email,password:Credentials.password})
    })
    const json = await response.json();
    if(json.success){
      localStorage.setItem("Token",json.authToken)
      Navigate('/')
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      <div className="signIn-main d-flex flex-column justify-content-center h-100">
        <div className="container-md border h-100 pt-4 px-md-5 rounded-3 d-flex flex-column justify-content-center">
          <div className='text-center pt-1'>
            <img src={googleImg} width={'75px'} />
            <h4>Sign in</h4>
            <p>Use your ClassRoom Account</p>
          </div>
          <div className="form-floating mb-3">
            <input autoComplete='off' type="email" className="form-control" id="email" placeholder="Email or phone" name='email' value={Credentials.email} onChange={OnChange} />
            <label htmlFor="email">Email or phone</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={Credentials.password} onChange={OnChange} />
            <label htmlFor="password">Password</label>
          </div>
          <a href="#" className="text-decoration-none ms-1 fw-semibold">Forget email?</a>
          <div className='my-4'>
            <p className='mb-0 ms-1 '>Not your computer? Use guest mode to sign in privately.</p>
            <a href="#" className="ms-1 text-decoration-none fw-semibold">Learn more</a>
          </div>
          <div className='d-flex justify-content-between me-1'>
            <Link to={"/signup"} className="btn btn-outline-primary p-button border-0 fw-semibold">Create Account</Link>
            <button className="btn btn-primary rounded-0 p-button2 fw-semibold" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
      </>
  )
}

export default Login
