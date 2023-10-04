import Button from "./Button"

function TodoActions({ resetTodo, clearTodo, completedTodoExist }) {
  return (
    <>
      <Button onClick={resetTodo}>Reset All</Button>
      <Button onClick={clearTodo} disabled={!completedTodoExist}>
        Clear Completed
      </Button>
    </>
  )
}

export default TodoActions
