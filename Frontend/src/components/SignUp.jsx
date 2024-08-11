import React, { useEffect, useState } from 'react'
import googleImg from '../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [Credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", phone: "", password: "" })
    const { firstname, lastname, email, phone, password } = Credentials;
    const [image, setImage] = useState();
    const Navigate = useNavigate();

    useEffect(()=>{
        document.title="Create account"
    },[])

    const OnChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value })
    };

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('image', image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/createuser", formData);
            const user = response.data;
            if (user.success) {
                localStorage.setItem("Token", user.authToken)
                Navigate('/')
            } else {
                alert("Invalid Credentials")
            }
        } catch (error) {
            console.log("Signup error " + error);
        }
    }

    return (
        <div className="signIn-main d-flex px-md-5 flex-column h-100 justify-content-center">
            <div className="container border pt-4 px-md-5 w-100 signIn-child rounded-3">
                <div>
                    <div className='text-center py-1'>
                        <img src={googleImg} width={'75px'} />
                        <h4>Create Your ClassRoom Account</h4>
                    </div>
                    <form method="POST" encType='multipart/form-data'>
                        <div className="form-floating mb-3">
                            <input autoComplete='off' type="text" className="form-control font" id="firstname" placeholder="Firstname" name='firstname' value={firstname} onChange={OnChange} />
                            <label className='font' htmlFor="firstname">Firstname</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input autoComplete='off' type="text" className="form-control font" id="lastname" placeholder="Lastname" name='lastname' value={lastname} onChange={OnChange} />
                            <label className='font' htmlFor="lastname">Lastname</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input autoComplete='off' type="email" className="form-control font" id="email" placeholder="Email or phone" name='email' value={email} onChange={OnChange} />
                            <label className='font' htmlFor="email">Email or phone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input autoComplete='off' type="number" className="form-control font" id="phone" placeholder="phone" name='phone' value={phone} onChange={OnChange} />
                            <label className='font' htmlFor="phone">Phone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control font" id="password" placeholder="Password" name='password' value={password} onChange={OnChange} />
                            <label className='font' htmlFor="password">Password</label>
                        </div>
                        <div className="my-3">
                            <input className="form-control font" type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className='d-flex justify-content-between me-1'>
                            <Link to={"/login"} className="btn btn-outline-primary p-button border-0 fw-semibold">Login</Link>
                            <button className="btn btn-primary rounded-0 p-button2 fw-semibold" onClick={handleSubmit}>Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup