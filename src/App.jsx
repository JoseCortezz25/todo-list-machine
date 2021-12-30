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
import { ChangeAlert } from './components/ChangeAlert'

function App() {
  const [activateSection, setActivateSection] = useState('all')
  const { state, statesUpdaters } = useTodos()

  const { 
    loading,
    error,
    totalTodos,
    completedTodos,
    searchText,
    searchedTodos,
    openModal,
    completedTodosItems,
    pendingTodosItems,
  } = state

  const { 
    setSearchText,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos
  }  = statesUpdaters

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
          {!loading && activateSection === 'all' && searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          {!loading && activateSection === 'completed' && completedTodosItems.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          {!loading && activateSection === 'pending' && pendingTodosItems.map(todo => (
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
      <ChangeAlert sincronize={sincronizeTodos} />
    </section>
  )
}

export default App
