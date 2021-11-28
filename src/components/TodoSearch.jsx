import React, { useState } from 'react'
import '../assets/styles/TodoSearch.css'

const TodoSearch = ({searchText, setSearchText}) => {
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
