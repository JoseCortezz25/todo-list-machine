import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../assets/styles/TodoSearch.css'

const TodoSearch = ({ setActivateSection }) => {
  const { searchText, setSearchText, pendingTodosItems } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <input
        type="search"
        className="TodoSearch"
        placeholder="Searching..."
        onChange={onSearchValueChange}
      />
      <section className="container-tags">
        <button onClick={() => setActivateSection('all')}>All</button>
        <button onClick={() => setActivateSection('completed')}>Completed</button>
        <button onClick={() => setActivateSection('pending')}>Pending <span className="icon-pending">{pendingTodosItems.length}</span></button>
      </section>
    </>
  )
}

export default TodoSearch
