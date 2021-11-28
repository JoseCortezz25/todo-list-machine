import React from 'react'
import '../assets/styles/CreateTodoButton.css'

const CreateTodoButton = () => {

  const onClickButton = () => {
    alert('Create Todo Button Clicked!')
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
      >
        +
      </button>
  )
}

export default CreateTodoButton
