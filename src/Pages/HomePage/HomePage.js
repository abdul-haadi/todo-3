import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='box'>
        <div className='homepage-container'>
        <h2>Please login To See the tracker</h2>
       <button className='login-btn'>
        <Link to='/login'>Login</Link>
        </button>
       <button className='signup-btn'>
        <Link to='/Signup'>Sign Up</Link>
        </button>
        </div>
    </div>
  )
}

export default HomePage