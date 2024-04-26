import React from 'react'
import useTodoState from './Todostate'
import Todo from '../../components/tiles/Todo/Todo'

const Todopage = () => {
    const state = useTodoState()
  return (
    <div className='Application'>
        <div>
            <input type='text' value={state.todo} onChange={state.handleTodo}></input>
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