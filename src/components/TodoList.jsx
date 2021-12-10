import React from 'react'
import '../assets/styles/TodoList.css'

const TodoList = (props) => {

  debugger
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}
      <ul>
        {props.render()}
      </ul>
    </section>
  )
  debugger
}

export default TodoList
