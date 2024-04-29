import React from 'react'
import './Todopage.css'
import useTodoState from './Todostate'
import Todo from '../../components/tiles/Todo/Todo'

const Todopage = () => {
    const state = useTodoState()
  return (
    <div className='Application'>
        <div>
            <label>Enter Todo</label>
            <input type='text' value={state.todo} onChange={state.handleTodo} placeholder='For e.g. React Task'></input>
            <button onClick={state.handleAddTodo}>Add</button>
        </div>
        {state.todos.length > 0 && <div className='todo-list'>
        {
            state.todos.map((todo, index) =>{
               return  <Todo key={index} todo={todo} onCheckChange={()=> state.handleChangeTodo(todo.title)} onDelete={() => state.handleDeleteTodo(todo.id)}></Todo>
            })
        }
        </div>
        } 
    </div>
  )
}

export default Todopage