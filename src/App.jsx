import React, { useState } from 'react'
import AppUI from './AppUI'
import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'

const defaultTodos = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Redux', completed: false },
  { text: 'Learn React Router', completed: true },
  { text: 'Learn React Hooks', completed: false },
  { text: 'Study English', completed: false },
  { text: 'Make bed', completed: false },
  { text: 'Play FIFA', completed: false },
  { text: 'Dust off christmas tree', completed: false },
]

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchText, setSearchText] = useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <AppUI
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchText={searchText}
        setSearchText={setSearchText}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App
