import React from 'react'
import './SignUpPage.css'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://ueitqibzfnopxcfhoise.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaXRxaWJ6Zm5vcHhjZmhvaXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzU4OTYsImV4cCI6MjAyOTE1MTg5Nn0.FYtXNaSrDJCKdO_brk55J1Q2Vw3SJIpEYk7kNDMf-uc"
);

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    async function handleSignup() {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
  
      console.log(data)
  
      if (error) {
        alert("The Email or Password is wrong, please try again!!");
      } else {
        navigate("/Todo");
      }
    }
  
    function handleEmail(e) {
      setEmail(e.target.value);
    }
  
    function handlePassword(e) {
      setPassword(e.target.value);
    }

  return (
    <div className='signup-box'>
      <div className='signup-container'>
        <label>Email</label>
        <input type='text' onChange={handleEmail}></input>
        <label>Password</label>
        <input type='password' onChange={handlePassword}></input>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpPage