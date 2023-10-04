import Todo from "./Todo"

function TodoList({ todos, deleteTodo, toggleTodo, counter }) {
  return (
    <>
      {!todos.length && <h2>To do list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          counter={counter}
        />
      ))}
    </>
  )
}
export default TodoList
