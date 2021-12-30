import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const useTodos = () => {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos
  } = useLocalStorage('TODOS_V1', [])

  const [searchText, setSearchText] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length
  const completedTodosItems = todos.filter(todo => todo.completed && todo.text.toLowerCase().includes(searchText.toLowerCase()))
  const pendingTodosItems = todos.filter(todo => !todo.completed && todo.text.toLowerCase().includes(searchText.toLowerCase()))

  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
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

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchText,
    setSearchText,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodosItems,
    pendingTodosItems,
    sincronizeTodos
  }
}

export { useTodos }