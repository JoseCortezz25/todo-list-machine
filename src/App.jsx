import React, { useState } from 'react'
import AppUI from './AppUI'
import './App.css'
import { TodoProvider } from './context/TodoContext'

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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
