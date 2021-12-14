import React, { useState } from 'react'
import './App.css'
import './assets/styles/AppUI.css'
import { useTodos } from './hooks/useTodos'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import { Modal } from './components/Modal'
import { EmptyTodos } from './components/EmptyTodos'
import { ErrorTodos } from './components/ErrorTodos'
import { LoadingTodos } from './components/LoadingTodos'
import { EmptyTodosResults } from './components/EmptyTodosResults'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert'

function App() {
  const [activateSection, setActivateSection] = useState('all')

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    setSearchText,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodosItems,
    pendingTodosItems,
    searchText,
    sincronizeTodos
  } = useTodos()

  return (
    <section className="container-general">
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          setActivateSection={setActivateSection}
          setSearchText={setSearchText}
          pendingTodosItems={pendingTodosItems}
          activateSection={activateSection}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}

        onError={() => <ErrorTodos error={error.message} />}
        onLoading={() => <LoadingTodos loading={loading} />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyTodosResults={() => <EmptyTodosResults textSeached={searchText} />}
      >
        <>
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
        </>
      </TodoList>

      {openModal &&
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      }

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </section>
  )
}

export default App
