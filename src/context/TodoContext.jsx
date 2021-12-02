import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchText, setSearchText] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length
  const completedTodosItems = todos.filter(todo => todo.completed)
  const pendingTodosItems = todos.filter(todo => !todo.completed)

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

  return (
    <TodoContext.Provider value={{
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
      pendingTodosItems
    }}> 
      {props.children}
    </TodoContext.Provider>
  )
}

export { 
  TodoContext, 
  TodoProvider,
}