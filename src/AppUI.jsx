import React, { useContext } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import './assets/styles/AppUI.css'
import { TodoContext } from './context/TodoContext'
import { Modal } from './components/Modal'

const AppUI = () => {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return (
    <section className="container-general">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Error: {error.message}</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchedTodos.length)
          && <p>Create you first todo now!</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal &&
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      }

      <CreateTodoButton 
        setOpenModal={setOpenModal} 
        openModal={openModal} 
      />
    </section>
  )
}

export default AppUI


