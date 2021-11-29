import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../assets/styles/TodoSearch.css'

const TodoSearch = () => {
  const {searchText, setSearchText} = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <input 
      type="search"
      className="TodoSearch" 
      placeholder="Searching..." 
      onChange={onSearchValueChange}
      />
  )
}

export default TodoSearch
