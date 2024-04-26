import React, { useState, useEffect } from "react";

const useTodoState = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try{
    const response= await fetch('http://localhost:3001/');
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
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

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
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
