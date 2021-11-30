import React from 'react'
import '../assets/styles/CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal, openModal }) => {

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => setOpenModal(!openModal)}
      >
        +
      </button>
  )
}

export default CreateTodoButton
