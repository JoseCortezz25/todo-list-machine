import React from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import './assets/styles/AppUI.css'

const AppUI = ({
  loading,
  error,
  
  totalTodos,
  completedTodos,
  searchText,
  setSearchText,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <section className="container-general">
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchText={searchText}
        setSearchText={setSearchText}
      />

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
      <CreateTodoButton />
    </section>
  )
}

export default AppUI
