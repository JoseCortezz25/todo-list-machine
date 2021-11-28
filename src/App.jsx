import './App.css'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const todos = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Redux', completed: false },
  { text: 'Learn React Router', completed: false },
  { text: 'Learn React Hooks', completed: true },
]

function App() {

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            />
        ))}
      </TodoList>
      <CreateTodoButton />

    </>
  )
}

export default App
