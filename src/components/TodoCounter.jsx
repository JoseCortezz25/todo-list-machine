import React from 'react'
import '../assets/styles/TodoCounter.css'

const TodoCounter = ({total, completed}) => {
  return (
    <h2 className="TodoCounter">{`Have completed ${completed} to ${total} TODOs`}</h2>
  ) 
}

export default TodoCounter