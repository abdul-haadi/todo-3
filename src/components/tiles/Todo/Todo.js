import React from 'react'

const Todo = ({todo, onCheckChange, onDelete}) => {
  return (
    <div>
        <input type="checkbox" checked={todo.status !== "pending"} onChange={onCheckChange}></input>{" "}
        <div className={`todo.title $(title.status)`}>{todo.task}</div>
        <button className='delete-button' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo