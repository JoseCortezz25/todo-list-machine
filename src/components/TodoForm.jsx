import React, { useContext, useState } from 'react'
import '../assets/styles/TodoForm.css'
import { TodoContext } from '../context/TodoContext'

const TodoForm = ({ setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { addTodo } = useContext(TodoContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if (newTodoValue.length <= 0) return
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = (e) => {
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} >
      <label>What of an amazing task we'll do today?</label>
      <textarea
        value={newTodoValue}
        onChange={({ target }) => setNewTodoValue(target.value)}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
