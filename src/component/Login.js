import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>

        <div>
            <form> 
                <h1>Login Form</h1>
                <div>
                <label>Email</label>
                <input></input>
                </div>
                <div>  <label>Password</label>
                <input></input></div>
                <div>  <button className='loginbutton'>Login</button></div>
                <Link to="Signup" >signup</Link>
                 <br>
                 </br>
                <Link to="Dashboard">Dashboard</Link>
             
          
          
          </form>

          <br></br>
          
           
        </div>
        
        
    </div>
  )
}

export default Login