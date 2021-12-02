import React from 'react'
import '../assets/styles/CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal }) => {

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => setOpenModal(prevState => !prevState)}
      >
        +
      </button>
  )
}

export default CreateTodoButton
