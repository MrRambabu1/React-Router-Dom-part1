import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <div>
            <h1>wellcome to Dashboard</h1>
        <Link to="Login">Login</Link>
    </div>
    <div>
        <Link to="Signup">Signup</Link>
        </div>
        </div>
  )
}

export default Dashboard