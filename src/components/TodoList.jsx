import React from 'react'
import '../assets/styles/TodoList.css'

const TodoList = (props) => {
  const renderFunc = props.children || props.render
  // debugger
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {/* {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()} */}
      {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptyTodosResults()}
      <ul>
        {renderFunc}
        {/* {props.children} */}
      </ul>
    </section>
  )
  debugger
}

export default TodoList
