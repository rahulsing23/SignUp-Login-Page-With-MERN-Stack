import React from 'react';
import './App.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
 
const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
      console.log(name)
      e.preventDefault()
      axios.post('http://localhost:3001/login',{ email, password})
      .then(result => {
          console.log(result)
          if(result.data === "Success")
          {navigate('/home')}
      }).catch(err => console.log(err))
  }
  return (
    <div className="container">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <p className="title-message">
            Welcome Back User.
          </p>
    
          <label>
            <input type="email" placeholder="Email" required onChange={(e) => setemail(e.target.value)}/>
          </label>
          <label>
            <input type="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)}/>
          </label>
          
          <button className="submit" >Submit</button>
          <p className="sign-in">
            Already have an account ?
            <Link >
              Login
            </Link>
          </p>
        </form>
      </div>
  )
}

export default Login
