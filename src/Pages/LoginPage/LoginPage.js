import "./LoginPage.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://ueitqibzfnopxcfhoise.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaXRxaWJ6Zm5vcHhjZmhvaXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzU4OTYsImV4cCI6MjAyOTE1MTg5Nn0.FYtXNaSrDJCKdO_brk55J1Q2Vw3SJIpEYk7kNDMf-uc"
);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
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
    <div className="login-box">
      <div className="main-container">
        <input type="text" placeholder="Email" onChange={handleEmail}></input>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <button onClick={handleLogin}>LOGIN</button>
        <label>Not registered? <Link to='/Signup'>Create an account</Link></label>
      </div>
    </div>
  );
}

export default LoginPage;
