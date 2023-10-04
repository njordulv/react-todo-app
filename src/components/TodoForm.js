import { useState } from "react"
import Button from "./Button"
import styles from "./Todo.module.scss"

function TodoForm({ addTodo }) {
  const [text, setText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const errorText = "Field is empty"

    if (!text) {
      setErrorMessage(errorText)
    } else {
      addTodo(text)
      setErrorMessage("")
    }
    setText("")
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          type="input"
          className={`${styles.formInput} ${errorMessage && styles.inputError}`}
          placeholder="Enter new to do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </>
  )
}
export default TodoForm
