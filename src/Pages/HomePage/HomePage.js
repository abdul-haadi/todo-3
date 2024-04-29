import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <h2>Please login To See the tracker</h2>
       <button className='login-btn'>
        <Link to='/login'>Login</Link>
        </button> 
    </div>
  )
}

export default HomePage