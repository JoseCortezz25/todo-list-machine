import React from 'react'
import '../assets/styles/TodoCounter.css'

const TodoCounter = ({total, completed}) => {
  return (
    <section className="container-principal-message">
      <span className="logo">TODO Machine</span>
      <h2 className="TodoCounter">{`Have completed ${completed} to ${total} TODOs`}</h2>
    </section>
  ) 
}

export default TodoCounter