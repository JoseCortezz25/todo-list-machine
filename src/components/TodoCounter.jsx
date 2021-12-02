import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../assets/styles/TodoCounter.css'

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <section className="container-principal-message">
      <span className="logo">TODO Machine</span>
      <h2 className="TodoCounter">{`Have completed ${completedTodos} to ${totalTodos} TODOs`}</h2>
    </section>
  )
}

export default TodoCounter