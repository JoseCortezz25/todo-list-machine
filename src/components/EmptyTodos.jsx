import React from 'react'
import AddTask from '../assets/static/images/add-tasks.svg'
import '../assets/styles/EmptyTodo.css'

const EmptyTodos = ({ setOpenModal }) => {
  return (
    <div className="empty-todos">
      <img src={AddTask} alt="" />
      {/* <h3>Create your first task right now!</h3> */}
      <h3>There are not todo's.</h3>
      {/* <button 
        className="TodoForm-button TodoForm-button-add"
        onClick={() => setOpenModal(prevState => !prevState)}
        >Add Task</button> */}
    </div>
  )
}

export { EmptyTodos }
