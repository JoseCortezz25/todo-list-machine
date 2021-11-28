import React from 'react'
import '../assets/styles/TodoList.css'

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export default TodoList
