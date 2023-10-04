import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.scss"
import TodoForm from "./components/TodoForm"
import TodoActions from "./components/TodoActions"
import TodoList from "./components/TodoList"
import styles from "./components/Todo.module.scss"

function App() {
  const initialTodos = JSON.parse(sessionStorage.getItem("todos")) || []
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (text) => {
    const idTodo = uuidv4()
    const newTodo = {
      text,
      isCompleted: false,
      id: idTodo,
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const clearCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <div className="content">
        <h1>To Do List App</h1>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <div className={styles.actions}>
            <TodoActions
              completedTodoExist={!!completedCount}
              resetTodo={resetTodoHandler}
              clearTodo={clearCompletedTodoHandler}
            />
          </div>
        )}
        <div className={styles.items}>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
          />
        </div>
        <div>
          {completedCount > 0 &&
            `You have completed ${completedCount} ${
              completedCount > 1 ? "todos" : "todo"
            }`}
        </div>
      </div>
    </div>
  )
}

export default App
