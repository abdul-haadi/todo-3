import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Todo from "./Pages/Todo/Todopage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import PrivateRoute from "./components/PrivateRoute.js";
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const { createClient } = require("@supabase/supabase-js");
  const supabase = createClient(
    "https://ueitqibzfnopxcfhoise.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaXRxaWJ6Zm5vcHhjZmhvaXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzU4OTYsImV4cCI6MjAyOTE1MTg5Nn0.FYtXNaSrDJCKdO_brk55J1Q2Vw3SJIpEYk7kNDMf-uc"
  );
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    navigate('/')
  }
  return (
    <div>
      <nav>
        <button className="nav-btn"><Link to="/">Home</Link></button>
        <button className="nav-btn"><Link to="/Todo">Todo</Link></button>
        <button className="nav-btn"><Link to="/Login">Login</Link></button>
        <button className="nav-btn" onClick={handleLogout}>LogOut</button>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Todo" element={<PrivateRoute Component={Todo} />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
