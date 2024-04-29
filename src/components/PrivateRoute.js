import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://ueitqibzfnopxcfhoise.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaXRxaWJ6Zm5vcHhjZmhvaXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzU4OTYsImV4cCI6MjAyOTE1MTg5Nn0.FYtXNaSrDJCKdO_brk55J1Q2Vw3SJIpEYk7kNDMf-uc"
);

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();

  async function handleRoute() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user)
    if (!user) {
      navigate("/login");
    }
  }

  useEffect(() => {
    handleRoute();
  }, []);
  const isAuthenticated = supabase.auth.getSession();

  return isAuthenticated ? <Component /> : <div>Not Authorized</div>;
};

export default PrivateRoute;
