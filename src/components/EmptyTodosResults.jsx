import React from 'react'
import AddTask from '../assets/static/images/add-tasks.svg'
import '../assets/styles/EmptyTodo.css'

const EmptyTodosResults = ({ textSeached }) => {
  return (
    <div className="empty-todos">
      <img src={AddTask} alt="" />
      <h3>
        There are no results for "{`${textSeached}`}".
        Create your first to do right now!
      </h3>
    </div>
  )
}

export { EmptyTodosResults }
