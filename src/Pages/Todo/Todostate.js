import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

const useTodoState = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const supabase = createClient(
    "https://ueitqibzfnopxcfhoise.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlaXRxaWJ6Zm5vcHhjZmhvaXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzU4OTYsImV4cCI6MjAyOTE1MTg5Nn0.FYtXNaSrDJCKdO_brk55J1Q2Vw3SJIpEYk7kNDMf-uc"
  );
  useEffect(() => {
    fetchTodos();
  }, []);


  const fetchTodos = async () => {
    try{
      
  const { data: {session}} = await supabase.auth.getSession()

    const response= await fetch('http://localhost:3001/',{
      headers:{
        'Authorization': "" + session.access_token
      }
    });

    const data = await response.json()
    setTodos(data)
    }
    catch(error){
      console.log(error)
    }
  };
  

  function handleTodo(e) {
    setTodo(e.target.value);
  }

  async function handleAddTodo() {
      const { data: {session}} = await supabase.auth.getSession()
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append('Authorization',"" + session.access_token);
      
      const raw = JSON.stringify({
        task: todo,
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch("http://localhost:3001", requestOptions);
      const result = await response.json();
      console.log('complete')
      fetchTodos();
      setTodo("");
  }

  async function handleDeleteTodo(id) {
    const { data: {session}} = await supabase.auth.getSession()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization',"" + session.access_token);

    const raw =JSON.stringify({
      id: id,
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch("http://localhost:3001", requestOptions);
    const result = await response.json();
    console.log('deleted')
    fetchTodos()
    // let reduceTodo = [...todos];
    // reduceTodo.splice(index, 1);
    // setTodos(reduceTodo);

  }

  function handleChangeTodo(e) {
    setTodos((val) => {
      return val.map((todo, index) => {
        if (todo.title === e) {
          return {
            ...todo,
            status: todo.status === "pending" ? "completed" : "pending",
          };
        }
        return todo;
      });
    });
  }

  return {
    todo,
    todos,
    setTodo,
    setTodos,
    handleTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeTodo,
  };
};

export default useTodoState;
