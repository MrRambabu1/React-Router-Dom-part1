import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <div class="signup-form">
            <form>
            <label for="username">Username</label>
    <input type="text" id="username" name="username" required></input>
    
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required></input>
    
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required></input>
    
    <label for="confirm-password">Confirm Password</label>
    <input type="password" id="confirm-password" name="confirm-password" required></input>
    <div>
    <button type="submit">Sign Up</button>

    </div>
    <div>
    <Link to="Login" ><button>Login</button></Link>
    
    
    </div>
    <Link to="Dashboard" ><button>Dashboard</button></Link>
    

        </form>
    
    </div>
    </div>
  )
}
export default Signup;