import React, { useState } from 'react'
import AppUI from './AppUI'
import './App.css'

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
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos)
  const [searchText, setSearchText] = useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

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
