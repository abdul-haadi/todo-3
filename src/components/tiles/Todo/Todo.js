import React from 'react'
import './Todo.css'

const Todo = ({todo, onCheckChange, onDelete}) => {
  return (
    <div className='main-container'>
      <div className='content-box'>
        <input type="checkbox" checked={todo.status !== "pending"} onChange={onCheckChange}></input>{" "}
        <div className={`todo.title $(title.status)`}>{todo.task}</div>
        <button className='delete-button' onClick={onDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Todo