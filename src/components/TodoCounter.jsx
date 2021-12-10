import React from 'react'
import '../assets/styles/TodoCounter.css'

const TodoCounter = ({ totalTodos, completedTodos, loading  }) => {
  return (
    <section className="container-principal-message">
      <span className="logo">TODO Machine</span>
      <h2 className={`TodoCounter ${!!loading ? "TodoSearch--loading" : "" }`}>{`Have completed ${completedTodos} to ${totalTodos} TODOs`}</h2>
    </section>
  )
}

export default TodoCounter