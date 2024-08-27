import React from 'react';
import './App.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        console.log(name)
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result => {
            console.log(result)
            navigate('/login')
        }).catch(err => console.log(err))
    }
  return (
    
      <div className="container">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          <p className="title-message">
            Signup now and get full access to our app.
          </p>
          <div className="flex">
            <label>
              <input type="text" placeholder="Name" required onChange={(e) => setname(e.target.value)}/>
            </label>
          </div>
          <label>
            <input type="email" placeholder="Email" required onChange={(e) => setemail(e.target.value)}/>
          </label>
          <label>
            <input type="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)}/>
          </label>
          {/* <label>
            <input type="password" placeholder="Confirm password" required onChange={(e) => setname(e.target.value)}/>
          </label> */}
          <button className="submit" >Submit</button>
          <p className="sign-in">
            Already have an account ?
            <Link >
              Login
            </Link>
          </p>
        </form>
      </div>
    
  );
};

export default SignUp;
