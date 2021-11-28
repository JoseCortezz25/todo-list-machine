import React from 'react'
import '../assets/styles/TodoItem.css'

const TodoItem = (props) => {
  const onDeleteTodo = () => {
    alert('You deleted the todo')
  }

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
        X
      </span>
    </li>
  );
}

export default TodoItem
