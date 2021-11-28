import React from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const AppUI = ({
  totalTodos,
  completedTodos,
  searchText,
  setSearchText,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <TodoList>
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
    </>
  )
}

export default AppUI
