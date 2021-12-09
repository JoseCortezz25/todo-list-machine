import React from 'react'
import AddTask from '../assets/static/images/add-tasks.svg'
import '../assets/styles/EmptyTodo.css'

const EmptyTodos = () => {
  return (
    <div className="empty-todos">
      <img src={AddTask} alt="" />
      <h3>There are not todo's.</h3>
    </div>
  )
}

export { EmptyTodos }
