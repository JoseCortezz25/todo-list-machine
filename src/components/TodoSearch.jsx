import React from 'react'
import '../assets/styles/TodoSearch.css'

const TodoSearch = ({ setSearchText, pendingTodosItems, setActivateSection, activateSection }) => {
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
        <button onClick={() => setActivateSection('all')} className={activateSection === 'all' ? 'link-active' : ''}>All</button>
        <button onClick={() => setActivateSection('completed')} className={activateSection === 'completed' ? 'link-active' : ''}>Completed</button>
        <button onClick={() => setActivateSection('pending')} className={activateSection === 'pending' ? 'link-active' : ''}>Pending <span className="icon-pending">{pendingTodosItems.length}</span></button>
      </section>
    </>
  )
}

export default TodoSearch
