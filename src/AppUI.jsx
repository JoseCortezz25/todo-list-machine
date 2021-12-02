import React, { useContext, useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import './assets/styles/AppUI.css'
import { TodoContext } from './context/TodoContext'
import { Modal } from './components/Modal'
import TodoForm from './components/TodoForm'
import { EmptyTodos } from './components/EmptyTodos'
import { ErrorTodos } from './components/ErrorTodos'
import { LoadingTodos } from './components/LoadingTodos'

const AppUI = () => {

  const [activateSection, setActivateSection] = useState('all')

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodosItems,
    pendingTodosItems
  } = useContext(TodoContext)

  return (
    <section className="container-general">
      <TodoCounter />
      <TodoSearch setActivateSection={setActivateSection}/>

      <TodoList>
        {error && <ErrorTodos error={error.message}/>}
        {loading &&  <LoadingTodos loading={loading}/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos setOpenModal={setOpenModal}/>}
        
        {activateSection === 'all' && searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

        {activateSection === 'completed' && completedTodosItems.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

        {activateSection === 'pending' && pendingTodosItems.map(todo => (
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
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      }

      <CreateTodoButton setOpenModal={setOpenModal} />
    </section>
  )
}

export default AppUI


